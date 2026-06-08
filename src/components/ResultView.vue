<template>
  <div>
    <v-card class="pa-5 text-center mb-4" elevation="6">
      <div style="font-size: 3.2rem; line-height: 1">{{ emoji }}</div>
      <h2 class="text-h5 font-weight-bold mt-2">{{ title }}</h2>
      <div class="text-h3 font-weight-bold my-3" :class="scoreClass">
        {{ session.correct }}<span class="text-h5 text-medium-emphasis">/{{ session.total }}</span>
      </div>
      <v-chip :color="scoreColor" variant="tonal" size="large">{{ percent }}%</v-chip>

      <!-- Bo'limlar bo'yicha -->
      <div class="mt-5 text-start">
        <div v-for="row in breakdown" :key="row.label" class="mb-3">
          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>{{ row.label }}</span>
            <span class="text-medium-emphasis">{{ row.correct }}/{{ row.total }}</span>
          </div>
          <v-progress-linear :model-value="row.pct" :color="row.color" height="6" rounded bg-color="surface-bright" />
        </div>
      </div>

      <div class="d-flex flex-column ga-2 mt-5">
        <v-btn v-if="hasWrong" color="secondary" variant="flat" @click="$emit('retry-wrong')">
          <v-icon start icon="mdi-refresh" /> Xato savollarni qayta ishlash ({{ wrongCount }})
        </v-btn>
        <v-btn variant="tonal" @click="showReview = !showReview">
          <v-icon start icon="mdi-format-list-checks" /> {{ showReview ? 'Javoblarni yashirish' : 'Javoblarni ko\'rish' }}
        </v-btn>
        <v-btn color="primary" @click="$emit('home')">
          <v-icon start icon="mdi-home" /> Bosh sahifa
        </v-btn>
      </div>
    </v-card>

    <!-- Javoblar tahlili -->
    <v-expand-transition>
      <div v-if="showReview" class="d-flex flex-column ga-3">
        <v-card
          v-for="(r, i) in session.results" :key="r.id"
          class="pa-4" :style="{ borderLeft: '4px solid ' + (r.correct ? '#36b37e' : '#e0564f') }"
        >
          <div class="d-flex ga-2 mb-2">
            <v-chip size="x-small" variant="tonal">{{ i + 1 }}</v-chip>
            <v-chip size="x-small" variant="tonal" :color="r.correct ? 'success' : 'error'">
              {{ r.correct ? 'To\'g\'ri' : 'Xato' }}
            </v-chip>
            <v-chip size="x-small" variant="text">{{ typeName(r.type) }}</v-chip>
          </div>
          <div class="font-weight-medium mb-2" v-html="cleanQ(r.q)"></div>

          <div v-if="r.type === 'mcq'" class="text-body-2">
            <div :class="r.correct ? 'text-success' : 'text-error'">
              Sizning javobingiz: {{ r.given }}
            </div>
            <div v-if="!r.correct" class="text-success">
              To'g'ri javob: {{ r.q.options[r.q.answer] }}
            </div>
          </div>
          <div v-else-if="r.type === 'tf'" class="text-body-2">
            <span :class="r.correct ? 'text-success' : 'text-error'">Siz: {{ r.given }}</span>
            <span v-if="!r.correct" class="text-success ms-2">To'g'ri: {{ r.q.answer ? 'To\'g\'ri' : 'Noto\'g\'ri' }}</span>
          </div>
          <div v-else-if="r.type === 'fill'" class="text-body-2">
            <div :class="r.correct ? 'text-success' : 'text-error'">Siz: {{ r.given || '—' }}</div>
            <div v-if="!r.correct" class="text-success">To'g'ri: {{ r.q.answer[0] }}</div>
          </div>
          <div v-else class="text-body-2">
            <div class="text-medium-emphasis">Sizning javobingiz: {{ r.given || '—' }}</div>
            <div class="text-success">Namuna: {{ r.q.answer }}</div>
          </div>

          <div class="text-caption text-medium-emphasis mt-2 pt-2" style="border-top: 1px dashed #2c3947">
            {{ r.q.explanation }} <br />
            <v-icon icon="mdi-book-open-variant" size="x-small" /> {{ r.q.ref }}
          </div>
        </v-card>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { typeName, partShort, diff } from '../data/meta.js'

const props = defineProps({ session: { type: Object, required: true } })
defineEmits(['retry-wrong', 'home'])

const showReview = ref(false)
const percent = computed(() => props.session.total ? Math.round(props.session.correct / props.session.total * 100) : 0)
const wrongCount = computed(() => props.session.total - props.session.correct)
const hasWrong = computed(() => wrongCount.value > 0)

const scoreColor = computed(() => percent.value >= 80 ? 'success' : percent.value >= 50 ? 'secondary' : 'error')
const scoreClass = computed(() => 'text-' + scoreColor.value)
const emoji = computed(() => percent.value >= 90 ? '🏆' : percent.value >= 70 ? '🎉' : percent.value >= 50 ? '👍' : '📚')
const title = computed(() =>
  percent.value >= 90 ? 'Ajoyib natija!' :
  percent.value >= 70 ? 'Yaxshi!' :
  percent.value >= 50 ? 'Yomon emas' : 'Yana mashq qiling')

// Qism bo'yicha tahlil
const breakdown = computed(() => {
  const map = {}
  for (const r of props.session.results) {
    if (!map[r.part]) map[r.part] = { total: 0, correct: 0 }
    map[r.part].total++
    if (r.correct) map[r.part].correct++
  }
  return Object.keys(map).sort().map(part => {
    const m = map[part]
    const pct = Math.round(m.correct / m.total * 100)
    return {
      label: partShort(Number(part)),
      correct: m.correct, total: m.total, pct,
      color: pct >= 70 ? 'success' : pct >= 40 ? 'secondary' : 'error'
    }
  })
})

function cleanQ (qq) {
  return (qq.q || '').replace(/_{2,}/g, '______')
}
</script>
