<template>
  <div>
    <!-- Hero -->
    <div class="text-center py-6">
      <v-chip color="secondary" variant="tonal" size="small" class="mb-3">
        <v-icon start icon="mdi-book-open-page-variant" /> Imtihonga tayyorgarlik
      </v-chip>
      <h1 class="text-h4 font-weight-bold">Ibodati Islomiya</h1>
      <p class="text-medium-emphasis mt-1">Ahmad Hodiy Maqsudiy kitobi asosidagi testlar</p>
      <p class="text-caption text-medium-emphasis mt-3">
        Bazada jami <b class="text-primary">{{ summary.total }}</b> ta savol
      </p>
    </div>

    <!-- Sozlamalar -->
    <v-card class="pa-4 pa-sm-5 mb-4" elevation="6">
      <div class="text-subtitle-1 font-weight-bold mb-4">Test sozlamalari</div>

      <!-- Mavzu -->
      <div class="mb-5">
        <div class="text-body-2 font-weight-medium mb-2">1. Mavzu (qism)</div>
        <v-chip-group v-model="selParts" multiple column>
          <v-chip
            v-for="p in PARTS" :key="p.id" :value="p.id"
            filter variant="outlined" color="primary"
          >
            {{ p.short }}
            <span class="text-caption ms-1 text-medium-emphasis">{{ summary.byPart[p.id] || 0 }}</span>
          </v-chip>
        </v-chip-group>
      </div>

      <!-- Tur -->
      <div class="mb-5">
        <div class="text-body-2 font-weight-medium mb-2">2. Savol turlari</div>
        <v-chip-group v-model="selTypes" multiple column>
          <v-chip
            v-for="t in TYPES" :key="t.id" :value="t.id"
            filter variant="outlined" color="primary"
          >
            <v-icon start :icon="t.icon" size="small" /> {{ t.name }}
            <span class="text-caption ms-1 text-medium-emphasis">{{ summary.byType[t.id] || 0 }}</span>
          </v-chip>
        </v-chip-group>
      </div>

      <!-- Daraja -->
      <div class="mb-5">
        <div class="text-body-2 font-weight-medium mb-2">3. Murakkablik darajasi</div>
        <v-chip-group v-model="selDiffs" multiple column>
          <v-chip
            v-for="d in DIFFICULTIES" :key="d.id" :value="d.id"
            filter variant="outlined" :color="d.color"
          >
            {{ d.name }}
            <span class="text-caption ms-1 text-medium-emphasis">{{ summary.byDiff[d.id] || 0 }}</span>
          </v-chip>
        </v-chip-group>
      </div>

      <!-- Savol soni -->
      <div class="mb-5">
        <div class="text-body-2 font-weight-medium mb-2">4. Savollar soni</div>
        <v-chip-group v-model="selCount" mandatory>
          <v-chip v-for="c in COUNTS" :key="c" :value="c" filter variant="outlined" color="secondary">{{ c }}</v-chip>
          <v-chip :value="'all'" filter variant="outlined" color="secondary">Hammasi</v-chip>
        </v-chip-group>
      </div>

      <!-- Variantlar -->
      <div class="d-flex flex-wrap ga-4 mb-2">
        <v-switch v-model="useTimer" color="primary" density="compact" hide-details
          label="Taymer (har savolga 45s)" />
        <v-switch v-model="useShuffle" color="primary" density="compact" hide-details
          label="Aralashtirish" />
      </div>

      <!-- Mavjudlik haqida -->
      <v-alert
        :type="available === 0 ? 'warning' : 'info'"
        variant="tonal" density="compact" class="mb-4 text-body-2"
      >
        <template v-if="available === 0">
          Tanlangan shartlar bo'yicha savol topilmadi. Filtrlarni kengaytiring.
        </template>
        <template v-else>
          Tanlov bo'yicha <b>{{ available }}</b> ta savol mavjud.
          Testda <b>{{ effectiveCount }}</b> tasi beriladi.
        </template>
      </v-alert>

      <v-btn
        block size="large" color="primary"
        :disabled="available === 0"
        @click="start"
      >
        Testni boshlash
        <v-icon end icon="mdi-arrow-right" />
      </v-btn>
    </v-card>

    <!-- Qo'shimcha -->
    <v-card class="pa-2 mb-4" variant="tonal">
      <div class="d-flex flex-wrap ga-2 justify-center">
        <v-btn variant="text" size="small" :disabled="bookmarks.length === 0" @click="$emit('bookmarks', bookmarks.slice())">
          <v-icon start icon="mdi-star" color="secondary" /> Belgilangan ({{ bookmarks.length }})
        </v-btn>
        <v-btn variant="text" size="small" @click="$emit('stats')">
          <v-icon start icon="mdi-chart-bar" /> Statistika
        </v-btn>
      </div>
    </v-card>

    <p class="text-caption text-center text-medium-emphasis mt-2">
      Manba: «Ibodati Islomiya» — Ahmad Hodiy Maqsudiy · ziyouz.com
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PARTS, TYPES, DIFFICULTIES, COUNTS } from '../data/meta.js'
import { bankSummary, filterQuestions } from '../data/index.js'
import { bookmarks } from '../composables/useStorage.js'

const emit = defineEmits(['start', 'bookmarks', 'stats'])

const summary = bankSummary()

// Sukut bo'yicha: barcha qism, barcha tur, barcha daraja, 20 ta
const selParts = ref(PARTS.map(p => p.id))
const selTypes = ref(TYPES.map(t => t.id))
const selDiffs = ref(DIFFICULTIES.map(d => d.id))
const selCount = ref(20)
const useTimer = ref(false)
const useShuffle = ref(true)

const available = computed(() => filterQuestions({
  parts: selParts.value, types: selTypes.value, difficulties: selDiffs.value
}).length)

const effectiveCount = computed(() => {
  const c = selCount.value === 'all' ? available.value : selCount.value
  return Math.min(c, available.value)
})

function start () {
  emit('start', {
    parts: selParts.value.slice(),
    types: selTypes.value.slice(),
    difficulties: selDiffs.value.slice(),
    count: selCount.value === 'all' ? available.value : selCount.value,
    shuffle: useShuffle.value,
    timer: useTimer.value
  })
}
</script>
