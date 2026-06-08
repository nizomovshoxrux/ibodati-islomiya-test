import { ref, watch } from 'vue'
import { db } from '../firebase.js'
import { user } from './useAuth.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const STATS_KEY = 'ibodat_stats_v1'
const BOOKMARK_KEY = 'ibodat_bookmarks_v1'

function load (key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
  catch { return fallback }
}
function save (key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)) } catch { /* ignore */ }
}

// ---- Belgilangan (bookmark) savollar ----
export const bookmarks = ref(load(BOOKMARK_KEY, []))

export function isBookmarked (id) { return bookmarks.value.includes(id) }
export function toggleBookmark (id) {
  const i = bookmarks.value.indexOf(id)
  if (i === -1) bookmarks.value.push(id)
  else bookmarks.value.splice(i, 1)
  save(BOOKMARK_KEY, bookmarks.value)
  saveCloud()
}

// ---- Statistika ----
// { sessions: [...], totalAnswered, totalCorrect, perPart: {1:{a,c}}, perType, perDiff }
export const stats = ref(load(STATS_KEY, {
  sessions: [],
  totalAnswered: 0,
  totalCorrect: 0,
  perType: {},
  perDiff: {},
  perPart: {}
}))

export function recordSession (session) {
  const s = stats.value
  s.sessions.unshift({
    date: Date.now(),
    total: session.total,
    correct: session.correct,
    parts: session.parts,
    types: session.types
  })
  if (s.sessions.length > 50) s.sessions.length = 50
  s.totalAnswered += session.total
  s.totalCorrect += session.correct
  for (const r of session.results) {
    bump(s.perType, r.type, r.correct)
    bump(s.perDiff, r.difficulty, r.correct)
    bump(s.perPart, r.part, r.correct)
  }
  save(STATS_KEY, s)
  saveCloud()
}

function bump (obj, key, correct) {
  if (!obj[key]) obj[key] = { a: 0, c: 0 }
  obj[key].a += 1
  if (correct) obj[key].c += 1
}

export function resetStats () {
  stats.value = { sessions: [], totalAnswered: 0, totalCorrect: 0, perType: {}, perDiff: {}, perPart: {} }
  save(STATS_KEY, stats.value)
  saveCloud()
}

// ---- Bulutga sinxronlash (Firebase) ----
export const syncing = ref(false)

// Foydalanuvchi kirganda bulutdagi ma'lumotni yuklash (yoki birinchi marta yuklab qo'yish)
async function loadCloud () {
  if (!db || !user.value) return
  try {
    syncing.value = true
    const snap = await getDoc(doc(db, 'users', user.value.uid))
    if (snap.exists() && snap.data().stats) {
      const d = snap.data()
      stats.value = d.stats
      save(STATS_KEY, stats.value)
      if (Array.isArray(d.bookmarks)) {
        bookmarks.value = d.bookmarks
        save(BOOKMARK_KEY, bookmarks.value)
      }
    } else {
      // Bulutda hali yo'q — joriy (local) ma'lumotni yuklab qo'yamiz
      await saveCloud(true)
    }
  } catch (e) {
    console.warn('Bulutdan yuklashda xato:', e)
  } finally {
    syncing.value = false
  }
}

let saveTimer = null
async function saveCloud (immediate = false) {
  if (!db || !user.value) return
  // Tez-tez yozilmasligi uchun biroz kechiktiramiz
  if (saveTimer) clearTimeout(saveTimer)
  const doSave = async () => {
    try {
      await setDoc(doc(db, 'users', user.value.uid), {
        stats: stats.value,
        bookmarks: bookmarks.value,
        email: user.value.email || '',
        name: user.value.displayName || '',
        updatedAt: Date.now()
      }, { merge: true })
    } catch (e) {
      console.warn('Bulutga saqlashda xato:', e)
    }
  }
  if (immediate) await doSave()
  else saveTimer = setTimeout(doSave, 800)
}

// Foydalanuvchi kirsa — bulutdan yuklaymiz
watch(user, (u) => { if (u) loadCloud() })

