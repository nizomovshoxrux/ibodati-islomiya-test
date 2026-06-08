<template>
  <div>
    <!-- Hero -->
    <div class="text-center py-7">
      <v-chip color="secondary" variant="tonal" size="small" class="mb-3 px-3" rounded="pill">
        <v-icon start icon="mdi-book-open-page-variant" /> Imtihonga tayyorgarlik
      </v-chip>
      <h1 class="text-h4 text-sm-h3 brand-title">Ibodati Islomiya</h1>
      <p class="text-medium-emphasis mt-2">Ahmad Hodiy Maqsudiy kitobi asosidagi testlar</p>
      <v-chip class="mt-4" color="primary" variant="tonal" size="small" rounded="pill">
        <v-icon start icon="mdi-database" size="small" /> Bazada {{ summary.total }} ta savol
      </v-chip>
    </div>

    <!-- Sozlamalar -->
    <v-card class="pa-4 pa-sm-6 mb-4" elevation="8">
      <div class="d-flex align-center mb-5">
        <v-icon icon="mdi-tune-variant" color="primary" class="me-2" />
        <span class="text-h6 font-weight-bold">Test sozlamalari</span>
      </div>

      <!-- Mavzu -->
      <div class="mb-6">
        <div class="d-flex align-center mb-3">
          <span class="text-body-1 font-weight-bold"><span class="text-primary">1.</span> Mavzu (qism)</span>
          <v-spacer />
          <v-btn
            size="small" variant="tonal" rounded="pill" class="px-4"
            :color="allParts ? 'primary' : 'grey-lighten-1'"
            @click="toggleAll(selParts, allPartIds)"
          >
            <v-icon start :icon="allParts ? 'mdi-check-all' : 'mdi-select-all'" size="small" />
            Barchasi
          </v-btn>
        </div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="p in PARTS" :key="p.id"
            class="sel-chip" :class="{ 'is-on': selParts.includes(p.id) }"
            :variant="selParts.includes(p.id) ? 'flat' : 'outlined'"
            :color="selParts.includes(p.id) ? 'primary' : 'grey-darken-1'"
            @click="toggle(selParts, p.id)"
          >
            <v-icon start :icon="selParts.includes(p.id) ? 'mdi-check-circle' : 'mdi-circle-outline'" size="small" />
            {{ p.short }}<span class="cnt">{{ summary.byPart[p.id] || 0 }}</span>
          </v-chip>
        </div>
      </div>

      <!-- Tur -->
      <div class="mb-6">
        <div class="d-flex align-center mb-3">
          <span class="text-body-1 font-weight-bold"><span class="text-primary">2.</span> Savol turlari</span>
          <v-spacer />
          <v-btn
            size="small" variant="tonal" rounded="pill" class="px-4"
            :color="allTypes ? 'primary' : 'grey-lighten-1'"
            @click="toggleAll(selTypes, allTypeIds)"
          >
            <v-icon start :icon="allTypes ? 'mdi-check-all' : 'mdi-select-all'" size="small" />
            Barchasi
          </v-btn>
        </div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="t in TYPES" :key="t.id"
            class="sel-chip" :class="{ 'is-on': selTypes.includes(t.id) }"
            :variant="selTypes.includes(t.id) ? 'flat' : 'outlined'"
            :color="selTypes.includes(t.id) ? 'primary' : 'grey-darken-1'"
            @click="toggle(selTypes, t.id)"
          >
            <v-icon start :icon="selTypes.includes(t.id) ? 'mdi-check-circle' : t.icon" size="small" />
            {{ t.name }}<span class="cnt">{{ summary.byType[t.id] || 0 }}</span>
          </v-chip>
        </div>
      </div>

      <!-- Daraja -->
      <div class="mb-6">
        <div class="d-flex align-center mb-3">
          <span class="text-body-1 font-weight-bold"><span class="text-primary">3.</span> Murakkablik darajasi</span>
          <v-spacer />
          <v-btn
            size="small" variant="tonal" rounded="pill" class="px-4"
            :color="allDiffs ? 'primary' : 'grey-lighten-1'"
            @click="toggleAll(selDiffs, allDiffIds)"
          >
            <v-icon start :icon="allDiffs ? 'mdi-check-all' : 'mdi-select-all'" size="small" />
            Barchasi
          </v-btn>
        </div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="d in DIFFICULTIES" :key="d.id"
            class="sel-chip" :class="{ 'is-on': selDiffs.includes(d.id) }"
            :variant="selDiffs.includes(d.id) ? 'flat' : 'outlined'"
            :color="selDiffs.includes(d.id) ? d.color : 'grey-darken-1'"
            @click="toggle(selDiffs, d.id)"
          >
            <v-icon start :icon="selDiffs.includes(d.id) ? 'mdi-check-circle' : 'mdi-circle-outline'" size="small" />
            {{ d.name }}<span class="cnt">{{ summary.byDiff[d.id] || 0 }}</span>
          </v-chip>
        </div>
      </div>

      <!-- Savol soni -->
      <div class="mb-5">
        <div class="text-body-1 font-weight-bold mb-3"><span class="text-primary">4.</span> Savollar soni</div>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="c in COUNTS" :key="c"
            class="sel-chip" :class="{ 'is-on': selCount === c }"
            :variant="selCount === c ? 'flat' : 'outlined'"
            :color="selCount === c ? 'secondary' : 'grey-darken-1'"
            @click="selCount = c"
          >{{ c }}</v-chip>
          <v-chip
            class="sel-chip" :class="{ 'is-on': selCount === 'all' }"
            :variant="selCount === 'all' ? 'flat' : 'outlined'"
            :color="selCount === 'all' ? 'secondary' : 'grey-darken-1'"
            @click="selCount = 'all'"
          ><v-icon start icon="mdi-infinity" size="small" /> Hammasi</v-chip>
        </div>
      </div>

      <!-- Variantlar -->
      <div class="d-flex flex-wrap ga-4 mb-4">
        <v-switch v-model="useTimer" color="primary" density="compact" hide-details inset
          label="Taymer (45s)" />
        <v-switch v-model="useShuffle" color="primary" density="compact" hide-details inset
          label="Aralashtirish" />
      </div>

      <!-- Mavjudlik -->
      <v-alert
        :type="available === 0 ? 'warning' : 'info'"
        variant="tonal" density="compact" class="mb-4 text-body-2" rounded="lg"
      >
        <template v-if="available === 0">
          Tanlangan shartlar bo'yicha savol topilmadi. Filtrlarni kengaytiring.
        </template>
        <template v-else>
          Tanlov bo'yicha <b>{{ available }}</b> ta savol mavjud. Testda <b>{{ effectiveCount }}</b> tasi beriladi.
        </template>
      </v-alert>

      <v-btn
        block size="x-large" color="primary" class="glow-btn font-weight-bold"
        :disabled="available === 0" @click="start"
      >
        Testni boshlash
        <v-icon end icon="mdi-arrow-right-circle" />
      </v-btn>
    </v-card>

    <!-- Qo'shimcha -->
    <div class="d-flex flex-wrap ga-3 mb-4">
      <v-btn
        class="flex-grow-1" size="large" variant="tonal" color="secondary"
        :disabled="bookmarks.length === 0" @click="$emit('bookmarks', bookmarks.slice())"
      >
        <v-icon start icon="mdi-star" /> Belgilangan ({{ bookmarks.length }})
      </v-btn>
      <v-btn
        class="flex-grow-1" size="large" variant="tonal" color="primary"
        @click="$emit('stats')"
      >
        <v-icon start icon="mdi-chart-bar" /> Statistika
      </v-btn>
    </div>

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

const allPartIds = PARTS.map(p => p.id)
const allTypeIds = TYPES.map(t => t.id)
const allDiffIds = DIFFICULTIES.map(d => d.id)

// Sukut bo'yicha har bo'limdan bittadan tanlangan (hammasi emas)
const selParts = ref([allPartIds[0]])   // 1-qism
const selTypes = ref(['mcq'])           // variantli test
const selDiffs = ref(['medium'])        // o'rta daraja
const selCount = ref(20)
const useTimer = ref(false)
const useShuffle = ref(true)

const allParts = computed(() => selParts.value.length === allPartIds.length)
const allTypes = computed(() => selTypes.value.length === allTypeIds.length)
const allDiffs = computed(() => selDiffs.value.length === allDiffIds.length)

function toggle (list, val) {
  const i = list.indexOf(val)
  if (i === -1) list.push(val)
  else if (list.length > 1) list.splice(i, 1) // kamida bittasi qolsin
}
function toggleAll (list, all) {
  if (list.length === all.length) { list.splice(1, list.length - 1) } // bittaga tushir
  else { list.splice(0, list.length, ...all) }                        // hammasini tanla
}

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
