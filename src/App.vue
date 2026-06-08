<template>
  <v-app>
    <v-main>
      <v-container class="py-4 px-3 safe-pad" style="max-width: 820px;">
        <transition name="fade" mode="out-in">
          <StartView
            v-if="screen === 'start'"
            :key="'start'"
            @start="onStart"
            @bookmarks="onBookmarks"
            @stats="screen = 'stats'"
          />
          <QuizView
            v-else-if="screen === 'quiz'"
            :key="'quiz'"
            @finish="onFinish"
            @quit="screen = 'start'"
          />
          <ResultView
            v-else-if="screen === 'result'"
            :key="'result'"
            :session="session"
            @retry-wrong="onRetryWrong"
            @home="screen = 'start'"
          />
          <StatsView
            v-else-if="screen === 'stats'"
            :key="'stats'"
            @home="screen = 'start'"
          />
        </transition>
      </v-container>
    </v-main>

    <!-- PWA o'rnatish taklifi -->
    <v-snackbar v-model="showInstall" :timeout="-1" color="surface-bright" location="bottom">
      <v-icon icon="mdi-download" class="me-2" /> Ilovani telefon/kompyuterga o'rnatish mumkin
      <template #actions>
        <v-btn variant="text" color="primary" @click="doInstall">O'rnatish</v-btn>
        <v-btn variant="text" @click="showInstall = false">Yopish</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StartView from './components/StartView.vue'
import QuizView from './components/QuizView.vue'
import ResultView from './components/ResultView.vue'
import StatsView from './components/StatsView.vue'
import { startQuiz, startFromIds, finishQuiz, wrongIds } from './composables/useQuiz.js'

const screen = ref('start')
const session = ref(null)

function onStart (config) {
  startQuiz(config)
  screen.value = 'quiz'
}
function onBookmarks (ids) {
  startFromIds(ids)
  screen.value = 'quiz'
}
function onFinish () {
  session.value = finishQuiz()
  screen.value = 'result'
}
function onRetryWrong () {
  const ids = wrongIds()
  if (ids.length) { startFromIds(ids); screen.value = 'quiz' }
}

// ---- PWA install ----
const showInstall = ref(false)
let deferredPrompt = null
onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    showInstall.value = true
  })
})
async function doInstall () {
  showInstall.value = false
  if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null }
}
</script>
