<template>
  <div>
    <v-card class="pa-4 pa-sm-5 mb-4" elevation="6">
      <div class="d-flex align-center mb-4">
        <h2 class="text-h6 font-weight-bold">📊 Statistika</h2>
        <v-spacer />
        <v-chip v-if="user" size="small" color="success" variant="tonal" class="me-2">
          <v-icon start icon="mdi-cloud-check" size="small" /> Bulutda saqlanmoqda
        </v-chip>
        <v-btn v-if="stats.totalAnswered" icon="mdi-delete-outline" size="small" variant="text" color="error" @click="confirmReset" />
      </div>

      <v-alert v-if="firebaseEnabled && !user" type="info" variant="tonal" density="compact" class="mb-4 text-body-2" rounded="lg">
        <v-icon icon="mdi-cloud-outline" size="small" /> Hisobga kiring — natijalaringiz bulutda saqlanadi va istalgan qurilmadan ko'rinadi.
      </v-alert>

      <div v-if="stats.totalAnswered === 0" class="text-center text-medium-emphasis py-8">
        <v-icon icon="mdi-chart-line" size="48" class="mb-2" />
        <div>Hali test ishlamadingiz. Birinchi testni boshlang!</div>
      </div>

      <template v-else>
        <!-- Umumiy -->
        <div class="d-flex ga-3 mb-5">
          <v-card variant="tonal" class="pa-3 text-center flex-grow-1">
            <div class="text-h5 font-weight-bold text-primary">{{ stats.totalAnswered }}</div>
            <div class="text-caption text-medium-emphasis">Jami javob</div>
          </v-card>
          <v-card variant="tonal" class="pa-3 text-center flex-grow-1">
            <div class="text-h5 font-weight-bold text-success">{{ overallPct }}%</div>
            <div class="text-caption text-medium-emphasis">To'g'ri foiz</div>
          </v-card>
          <v-card variant="tonal" class="pa-3 text-center flex-grow-1">
            <div class="text-h5 font-weight-bold text-secondary">{{ stats.sessions.length }}</div>
            <div class="text-caption text-medium-emphasis">Testlar</div>
          </v-card>
        </div>

        <!-- Qism bo'yicha -->
        <div class="text-subtitle-2 font-weight-bold mb-2">Qismlar bo'yicha</div>
        <div v-for="row in partRows" :key="row.label" class="mb-3">
          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>{{ row.label }}</span>
            <span class="text-medium-emphasis">{{ row.c }}/{{ row.a }} · {{ row.pct }}%</span>
          </div>
          <v-progress-linear :model-value="row.pct" :color="row.color" height="6" rounded bg-color="surface-bright" />
        </div>

        <!-- Tur bo'yicha -->
        <div class="text-subtitle-2 font-weight-bold mb-2 mt-5">Savol turlari bo'yicha</div>
        <div v-for="row in typeRows" :key="row.label" class="mb-3">
          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>{{ row.label }}</span>
            <span class="text-medium-emphasis">{{ row.c }}/{{ row.a }} · {{ row.pct }}%</span>
          </div>
          <v-progress-linear :model-value="row.pct" :color="row.color" height="6" rounded bg-color="surface-bright" />
        </div>

        <!-- So'nggi testlar -->
        <div class="text-subtitle-2 font-weight-bold mb-2 mt-5">So'nggi testlar</div>
        <v-list density="compact" bg-color="transparent">
          <v-list-item v-for="(s, i) in stats.sessions.slice(0, 8)" :key="i" class="px-0">
            <template #prepend>
              <v-avatar size="36" :color="pctColor(Math.round(s.correct / s.total * 100))" variant="tonal" class="me-3">
                <span class="text-caption font-weight-bold">{{ Math.round(s.correct / s.total * 100) }}</span>
              </v-avatar>
            </template>
            <v-list-item-title class="text-body-2">{{ s.correct }}/{{ s.total }} to'g'ri</v-list-item-title>
            <v-list-item-subtitle class="text-caption">{{ fmtDate(s.date) }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </template>

      <v-btn block color="primary" class="mt-4" @click="$emit('home')">
        <v-icon start icon="mdi-arrow-left" /> Orqaga
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { stats, resetStats } from '../composables/useStorage.js'
import { partShort, typeName } from '../data/meta.js'
import { user } from '../composables/useAuth.js'
import { firebaseEnabled } from '../firebase.js'

defineEmits(['home'])

const overallPct = computed(() => stats.value.totalAnswered
  ? Math.round(stats.value.totalCorrect / stats.value.totalAnswered * 100) : 0)

function pctColor (p) { return p >= 70 ? 'success' : p >= 40 ? 'secondary' : 'error' }

const partRows = computed(() => Object.keys(stats.value.perPart).sort().map(k => {
  const m = stats.value.perPart[k]
  const pct = Math.round(m.c / m.a * 100)
  return { label: partShort(Number(k)), a: m.a, c: m.c, pct, color: pctColor(pct) }
}))

const typeRows = computed(() => Object.keys(stats.value.perType).map(k => {
  const m = stats.value.perType[k]
  const pct = Math.round(m.c / m.a * 100)
  return { label: typeName(k), a: m.a, c: m.c, pct, color: pctColor(pct) }
}))

function fmtDate (ts) {
  const d = new Date(ts)
  return d.toLocaleDateString('uz', { day: '2-digit', month: 'short' }) + ' ' +
         d.toLocaleTimeString('uz', { hour: '2-digit', minute: '2-digit' })
}

function confirmReset () {
  if (confirm('Barcha statistika tarixini tozalamoqchimisiz?')) resetStats()
}
</script>
