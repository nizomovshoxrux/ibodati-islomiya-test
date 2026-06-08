import { reactive } from 'vue'
import { filterQuestions, QUESTIONS } from '../data/index.js'
import { recordSession } from './useStorage.js'

function shuffle (arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Bo'sh joy / ochiq javoblarni solishtirish uchun normallashtirish
export function normalize (s) {
  return String(s || '')
    .toLowerCase()
    .replace(/['’`‘ʼ]/g, "'")      // apostroflarni birxillashtirish
    .replace(/[.,!?;:()«»"]/g, ' ')
    .replace(/o'/g, "o'").replace(/g'/g, "g'")
    .replace(/\s+/g, ' ')
    .trim()
}

export function checkFill (given, accepted) {
  const g = normalize(given)
  if (!g) return false
  return accepted.some(a => {
    const n = normalize(a)
    return g === n || g.includes(n) || n.includes(g)
  })
}

export const quiz = reactive({
  active: false,
  queue: [],
  index: 0,
  results: [],          // {id, q, correct, given, type, difficulty, part}
  config: null,
  answered: false,      // joriy savol tekshirildimi
  lastCorrect: null,
  startedAt: 0
})

export function buildPool (config) {
  let pool = filterQuestions(config)
  return pool
}

export function startQuiz (config) {
  let pool = filterQuestions(config)
  if (config.shuffle !== false) pool = shuffle(pool)
  const count = Math.min(config.count, pool.length)
  quiz.queue = pool.slice(0, count)
  quiz.index = 0
  quiz.results = []
  quiz.config = config
  quiz.active = true
  quiz.answered = false
  quiz.lastCorrect = null
  quiz.startedAt = Date.now()
}

// Belgilangan savollar bo'yicha test
export function startFromIds (ids, config = {}) {
  let pool = QUESTIONS.filter(q => ids.includes(q.id))
  pool = shuffle(pool)
  quiz.queue = pool
  quiz.index = 0
  quiz.results = []
  quiz.config = { ...config, count: pool.length, parts: [], types: [], difficulties: [], custom: true }
  quiz.active = true
  quiz.answered = false
  quiz.lastCorrect = null
  quiz.startedAt = Date.now()
}

export function currentQuestion () {
  return quiz.queue[quiz.index] || null
}

// Javobni qayd qilish. correct: boolean, given: foydalanuvchi javobi
export function submitAnswer (correct, given) {
  if (quiz.answered) return
  const q = currentQuestion()
  quiz.results.push({
    id: q.id, q, correct, given,
    type: q.type, difficulty: q.difficulty, part: q.part
  })
  quiz.answered = true
  quiz.lastCorrect = correct
}

export function nextQuestion () {
  if (quiz.index < quiz.queue.length - 1) {
    quiz.index++
    quiz.answered = false
    quiz.lastCorrect = null
    return true
  }
  return false // tugadi
}

export function finishQuiz () {
  const correct = quiz.results.filter(r => r.correct).length
  const session = {
    total: quiz.results.length,
    correct,
    results: quiz.results,
    parts: quiz.config?.parts || [],
    types: quiz.config?.types || []
  }
  recordSession(session)
  quiz.active = false
  return session
}

export function wrongIds () {
  return quiz.results.filter(r => !r.correct).map(r => r.id)
}
