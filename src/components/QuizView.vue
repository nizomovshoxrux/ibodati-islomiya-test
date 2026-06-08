<template>
  <div v-if="q">
    <!-- Yuqori panel -->
    <div class="d-flex align-center ga-3 mb-3">
      <v-btn icon="mdi-close" size="small" variant="text" @click="$emit('quit')" />
      <v-progress-linear
        :model-value="progress" color="primary" height="8" rounded
        bg-color="surface-bright" class="flex-grow-1"
      />
      <v-chip v-if="cfg.timer" size="small" :color="timeLeft <= 10 ? 'error' : 'secondary'" variant="tonal">
        <v-icon start icon="mdi-timer-outline" size="small" /> {{ timeLeft }}
      </v-chip>
    </div>

    <!-- Meta -->
    <div class="d-flex align-center ga-2 mb-2 flex-wrap">
      <span class="text-body-2 font-weight-bold text-medium-emphasis">{{ index + 1 }} / {{ total }}</span>
      <v-chip size="x-small" variant="tonal"><v-icon start :icon="typeIcon(q.type)" size="x-small" />{{ typeName(q.type) }}</v-chip>
      <v-chip size="x-small" variant="tonal" :color="diff(q.difficulty).color">{{ diff(q.difficulty).name }}</v-chip>
      <v-chip size="x-small" variant="text" color="secondary">{{ partShort(q.part) }}</v-chip>
      <v-spacer />
      <v-btn
        :icon="bookmarked ? 'mdi-star' : 'mdi-star-outline'"
        :color="bookmarked ? 'secondary' : undefined"
        size="small" variant="text" @click="toggleBookmark(q.id)"
      />
    </div>

    <!-- Savol kartasi -->
    <v-card class="pa-4 pa-sm-5 mb-4" elevation="6">
      <div class="q-text text-h6 mb-4" v-html="renderQuestion(q)"></div>

      <!-- VARIANTLI -->
      <div v-if="q.type === 'mcq'" class="d-flex flex-column ga-2">
        <v-btn
          v-for="(opt, i) in q.options" :key="i"
          class="opt-btn" :variant="optVariant(i)" :color="optColor(i)"
          @click="!revealed && (selected = i)"
        >
          <span class="font-weight-bold me-3">{{ letters[i] }}</span>
          <span>{{ opt }}</span>
        </v-btn>
      </div>

      <!-- TO'G'RI / NOTO'G'RI -->
      <div v-else-if="q.type === 'tf'" class="d-flex ga-3">
        <v-btn
          class="flex-grow-1" size="large" :variant="tfVariant(true)" :color="tfColor(true)"
          @click="!revealed && (selected = true)"
        >
          <v-icon start icon="mdi-check" /> To'g'ri
        </v-btn>
        <v-btn
          class="flex-grow-1" size="large" :variant="tfVariant(false)" :color="tfColor(false)"
          @click="!revealed && (selected = false)"
        >
          <v-icon start icon="mdi-close" /> Noto'g'ri
        </v-btn>
      </div>

      <!-- BO'SH JOY -->
      <div v-else-if="q.type === 'fill'">
        <v-text-field
          v-model="textAnswer" :disabled="revealed" variant="outlined"
          placeholder="Javobni yozing..." hide-details
          @keyup.enter="!revealed && check()"
        />
      </div>

      <!-- OCHIQ SAVOL -->
      <div v-else-if="q.type === 'open'">
        <v-textarea
          v-model="textAnswer" :disabled="revealed" variant="outlined" rows="3"
          placeholder="O'z javobingizni yozing..." hide-details auto-grow
        />
      </div>

      <!-- Izoh / javob -->
      <v-expand-transition>
        <div v-if="revealed">
          <v-alert
            :type="alertType" variant="tonal" class="mt-4" density="comfortable"
          >
            <div class="font-weight-bold mb-1">
              <template v-if="q.type === 'open'">Namunaviy javob</template>
              <template v-else-if="lastCorrect">To'g'ri javob! ✓</template>
              <template v-else>Noto'g'ri ✗</template>
            </div>

            <!-- Ochiq savol: namunaviy javob + o'z-o'zini baholash -->
            <div v-if="q.type === 'open'" class="mb-1">{{ q.answer }}</div>
            <!-- Bo'sh joy: to'g'ri javob -->
            <div v-else-if="q.type === 'fill' && !lastCorrect" class="mb-1">
              To'g'ri javob: <b>{{ q.answer[0] }}</b>
            </div>

            <div class="text-body-2">{{ q.explanation }}</div>
            <div class="text-caption text-medium-emphasis mt-2">
              <v-icon icon="mdi-book-open-variant" size="x-small" /> {{ q.ref }}
            </div>
          </v-alert>

          <!-- Ochiq savolni o'zi baholaydi -->
          <div v-if="q.type === 'open' && !graded" class="d-flex ga-2 mt-3">
            <v-btn class="flex-grow-1" color="success" variant="tonal" @click="selfGrade(true)">
              <v-icon start icon="mdi-check" /> To'g'ri bildim
            </v-btn>
            <v-btn class="flex-grow-1" color="error" variant="tonal" @click="selfGrade(false)">
              <v-icon start icon="mdi-close" /> Bilmadim
            </v-btn>
          </div>
        </div>
      </v-expand-transition>
    </v-card>

    <!-- Pastki tugma -->
    <!-- IMTIHON rejimi (mcq/tf/fill): javob ko'rsatilmaydi, to'g'ridan-to'g'ri Keyingi -->
    <v-btn
      v-if="exam && q.type !== 'open'"
      block size="large" color="primary"
      :disabled="!canCheck" @click="examAdvance"
    >
      {{ isLast ? 'Yakunlash' : 'Keyingi' }}
      <v-icon end :icon="isLast ? 'mdi-flag-checkered' : 'mdi-arrow-right'" />
    </v-btn>

    <!-- MASHQ rejimi yoki ochiq savol: avval tekshirish -->
    <v-btn
      v-else-if="!revealed"
      block size="large" color="primary"
      :disabled="!canCheck" @click="check"
    >Tekshirish</v-btn>

    <v-btn
      v-else-if="canAdvance"
      block size="large" color="primary" @click="next"
    >
      {{ isLast ? 'Yakunlash' : 'Keyingi' }}
      <v-icon end :icon="isLast ? 'mdi-flag-checkered' : 'mdi-arrow-right'" />
    </v-btn>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { quiz, currentQuestion, submitAnswer, nextQuestion, checkFill } from '../composables/useQuiz.js'
import { isBookmarked, toggleBookmark } from '../composables/useStorage.js'
import { typeName, typeIcon, diff, partShort } from '../data/meta.js'

const emit = defineEmits(['finish', 'quit'])
const letters = ['A', 'B', 'C', 'D', 'E', 'F']

const q = computed(() => currentQuestion())
const cfg = computed(() => quiz.config || {})
const exam = computed(() => !!cfg.value.exam)
const index = computed(() => quiz.index)
const total = computed(() => quiz.queue.length)
const progress = computed(() => ((quiz.index) / quiz.queue.length) * 100)
const isLast = computed(() => quiz.index === quiz.queue.length - 1)
const bookmarked = computed(() => q.value && isBookmarked(q.value.id))

const selected = ref(null)     // mcq: index | tf: boolean
const textAnswer = ref('')
const revealed = ref(false)
const lastCorrect = ref(null)
const graded = ref(false)      // ochiq savol baholandimi

const canCheck = computed(() => {
  if (!q.value) return false
  if (q.value.type === 'mcq') return selected.value !== null
  if (q.value.type === 'tf') return selected.value !== null
  return textAnswer.value.trim().length > 0
})
// Ochiq savolda "Keyingi" faqat baholangandan keyin
const canAdvance = computed(() => q.value?.type !== 'open' || graded.value)

const alertType = computed(() => {
  if (q.value?.type === 'open') return 'info'
  return lastCorrect.value ? 'success' : 'error'
})

function renderQuestion (qq) {
  let text = qq.q
  if (qq.type === 'fill') {
    text = text.replace(/_{2,}/g, '<span class="blank">______</span>')
  }
  return text
}

// ---- Variant ranglari ----
function optVariant (i) {
  if (revealed.value) {
    if (i === q.value.answer) return 'tonal'
    if (i === selected.value) return 'tonal'
    return 'outlined'
  }
  return selected.value === i ? 'tonal' : 'outlined'
}
function optColor (i) {
  if (revealed.value) {
    if (i === q.value.answer) return 'success'
    if (i === selected.value && i !== q.value.answer) return 'error'
    return undefined
  }
  return selected.value === i ? 'primary' : undefined
}
function tfVariant (val) {
  if (revealed.value) {
    if (val === q.value.answer) return 'tonal'
    if (val === selected.value) return 'tonal'
    return 'outlined'
  }
  return selected.value === val ? 'tonal' : 'outlined'
}
function tfColor (val) {
  if (revealed.value) {
    if (val === q.value.answer) return 'success'
    if (val === selected.value && val !== q.value.answer) return 'error'
    return undefined
  }
  return selected.value === val ? 'primary' : undefined
}

// ---- Tekshirish ----
function check () {
  const qq = q.value
  let correct = false
  let given = ''
  if (qq.type === 'mcq') { correct = selected.value === qq.answer; given = qq.options[selected.value] }
  else if (qq.type === 'tf') { correct = selected.value === qq.answer; given = selected.value ? "To'g'ri" : "Noto'g'ri" }
  else if (qq.type === 'fill') { correct = checkFill(textAnswer.value, qq.answer); given = textAnswer.value }
  else if (qq.type === 'open') { given = textAnswer.value; revealed.value = true; return } // baholashni kutadi

  lastCorrect.value = correct
  revealed.value = true
  submitAnswer(correct, given)
}

// Imtihon rejimi: javobni jimgina qayd qilib, keyingisiga o'tadi (ko'rsatmasdan)
function gradeObjective () {
  const qq = q.value
  if (qq.type === 'mcq') return { correct: selected.value === qq.answer, given: qq.options[selected.value] }
  if (qq.type === 'tf') return { correct: selected.value === qq.answer, given: selected.value ? "To'g'ri" : "Noto'g'ri" }
  return { correct: checkFill(textAnswer.value, qq.answer), given: textAnswer.value }
}
function examAdvance () {
  const { correct, given } = gradeObjective()
  submitAnswer(correct, given)
  next()
}

function selfGrade (correct) {
  lastCorrect.value = correct
  graded.value = true
  submitAnswer(correct, textAnswer.value)
}

function next () {
  stopTimer()
  const more = nextQuestion()
  if (!more) { emit('finish'); return }
  resetLocal()
}

function resetLocal () {
  selected.value = null
  textAnswer.value = ''
  revealed.value = false
  lastCorrect.value = null
  graded.value = false
  if (cfg.value.timer) startTimer()
}

// ---- Taymer ----
const timeLeft = ref(45)
let timerId = null
function startTimer () {
  timeLeft.value = 45
  stopTimer()
  timerId = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopTimer()
      onTimeout()
    }
  }, 1000)
}
function stopTimer () { if (timerId) { clearInterval(timerId); timerId = null } }
function onTimeout () {
  const qq = q.value
  // Imtihon rejimi (mcq/tf/fill): jimgina qayd qilib keyingisiga o'tadi
  if (exam.value && qq.type !== 'open') {
    const { correct, given } = gradeObjective()
    submitAnswer(correct, given || '(vaqt tugadi)')
    next()
    return
  }
  if (qq.type === 'open') {
    // vaqt tugadi — namunani ko'rsatib, xato deb baholaymiz
    revealed.value = true
    selfGrade(false)
  } else if (!revealed.value) {
    let correct = false, given = '(vaqt tugadi)'
    if (qq.type === 'mcq' && selected.value !== null) { correct = selected.value === qq.answer; given = qq.options[selected.value] }
    else if (qq.type === 'tf' && selected.value !== null) { correct = selected.value === qq.answer }
    else if (qq.type === 'fill') { correct = checkFill(textAnswer.value, qq.answer); given = textAnswer.value || given }
    lastCorrect.value = correct
    revealed.value = true
    submitAnswer(correct, given)
  }
}

// Birinchi savol uchun taymerni ishga tushirish
watch(q, (nq, oq) => { if (nq && !oq && cfg.value.timer) startTimer() }, { immediate: true })
onUnmounted(stopTimer)
</script>
