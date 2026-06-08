import { ref } from 'vue'

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
}

function bump (obj, key, correct) {
  if (!obj[key]) obj[key] = { a: 0, c: 0 }
  obj[key].a += 1
  if (correct) obj[key].c += 1
}

export function resetStats () {
  stats.value = { sessions: [], totalAnswered: 0, totalCorrect: 0, perType: {}, perDiff: {}, perPart: {} }
  save(STATS_KEY, stats.value)
}
