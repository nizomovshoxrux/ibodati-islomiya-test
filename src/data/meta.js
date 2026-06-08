// Test bazasi uchun umumiy meta ma'lumotlar

export const PARTS = [
  { id: 1, name: "1-qism · E'tiqod (Aqida)", short: "E'tiqod" },
  { id: 2, name: '2-qism · Poklik (Tahorat)', short: 'Poklik' },
  { id: 3, name: '3-qism · Namoz qoidalari', short: 'Namoz qoid.' },
  { id: 4, name: '4-qism · Namoz (batafsil)', short: 'Namoz bataf.' },
  { id: 5, name: '5-qism · Ro\'za, Zakot, Haj', short: "Ro'za/Zakot/Haj" }
]

export const TYPES = [
  { id: 'mcq',  name: 'Variantli test', icon: 'mdi-format-list-bulleted' },
  { id: 'tf',   name: "To'g'ri / Noto'g'ri", icon: 'mdi-check-circle-outline' },
  { id: 'fill', name: "Bo'sh joyni to'ldirish", icon: 'mdi-form-textbox' },
  { id: 'open', name: 'Ochiq savol', icon: 'mdi-text-box-outline' }
]

export const DIFFICULTIES = [
  { id: 'easy',   name: 'Oson',   color: 'success' },
  { id: 'medium', name: "O'rta",  color: 'info' },
  { id: 'hard',   name: 'Qiyin',  color: 'warning' }
]

export const COUNTS = [10, 20, 50, 100]

export function typeName (id) { return (TYPES.find(t => t.id === id) || {}).name || id }
export function typeIcon (id) { return (TYPES.find(t => t.id === id) || {}).icon || 'mdi-help' }
export function diff (id) { return DIFFICULTIES.find(d => d.id === id) || { name: id, color: 'grey' } }
export function partName (id) { return (PARTS.find(p => p.id === id) || {}).name || ('Qism ' + id) }
export function partShort (id) { return (PARTS.find(p => p.id === id) || {}).short || ('Q' + id) }
