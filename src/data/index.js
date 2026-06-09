import part1 from './part1.js'
import part2 from './part2.js'
import part3 from './part3.js'
import part4 from './part4.js'
import part5 from './part5.js'
import part1b from './part1b.js'
import part2b from './part2b.js'
import part3b from './part3b.js'
import part4b from './part4b.js'
import part5b from './part5b.js'
import extraTypes from './partExtraTypes.js'

// Barcha savollar bitta massivda
export const QUESTIONS = [
  ...part1, ...part1b,
  ...part2, ...part2b,
  ...part3, ...part3b,
  ...part4, ...part4b,
  ...part5, ...part5b,
  ...extraTypes
]

// Bazani filtrlash
export function filterQuestions ({ parts, types, difficulties }) {
  return QUESTIONS.filter(q =>
    (!parts || parts.length === 0 || parts.includes(q.part)) &&
    (!types || types.length === 0 || types.includes(q.type)) &&
    (!difficulties || difficulties.length === 0 || difficulties.includes(q.difficulty))
  )
}

// Statistika: tur/daraja/qism bo'yicha sanash
export function bankSummary () {
  const byType = {}, byDiff = {}, byPart = {}
  for (const q of QUESTIONS) {
    byType[q.type] = (byType[q.type] || 0) + 1
    byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1
    byPart[q.part] = (byPart[q.part] || 0) + 1
  }
  return { total: QUESTIONS.length, byType, byDiff, byPart }
}
