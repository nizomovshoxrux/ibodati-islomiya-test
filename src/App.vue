<template>
  <v-app>
    <!-- Yuqori panel (faqat Firebase yoqilganda) -->
    <v-app-bar v-if="firebaseEnabled" flat density="comfortable" color="surface" border="b">
      <v-app-bar-title class="text-body-1 font-weight-bold">
        <v-icon icon="mdi-book-open-page-variant" color="primary" class="me-1" size="small" /> Ibodat Test
      </v-app-bar-title>
      <template #append>
        <v-menu v-if="user">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" class="text-none">
              <v-avatar color="primary" size="30" class="me-2">
                <span class="text-caption font-weight-bold">{{ initial }}</span>
              </v-avatar>
              <span class="d-none d-sm-inline">{{ user.displayName || user.email }}</span>
              <v-icon end icon="mdi-chevron-down" size="small" />
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item :subtitle="user.email" :title="user.displayName || 'Foydalanuvchi'">
              <template #prepend><v-icon icon="mdi-account" /></template>
            </v-list-item>
            <v-divider />
            <v-list-item title="Statistika" @click="screen = 'stats'">
              <template #prepend><v-icon icon="mdi-chart-bar" /></template>
            </v-list-item>
            <v-list-item title="Chiqish" base-color="error" @click="doLogout">
              <template #prepend><v-icon icon="mdi-logout" /></template>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-else variant="tonal" color="primary" size="small" @click="authOpen = true">
          <v-icon start icon="mdi-login" /> Kirish
        </v-btn>
      </template>
    </v-app-bar>

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

    <!-- Auth oynasi -->
    <AuthDialog v-model="authOpen" />

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
import { ref, computed, onMounted } from 'vue'
import StartView from './components/StartView.vue'
import QuizView from './components/QuizView.vue'
import ResultView from './components/ResultView.vue'
import StatsView from './components/StatsView.vue'
import AuthDialog from './components/AuthDialog.vue'
import { startQuiz, startFromIds, finishQuiz, wrongIds } from './composables/useQuiz.js'
import { firebaseEnabled } from './firebase.js'
import { user, logout } from './composables/useAuth.js'

const screen = ref('start')
const session = ref(null)
const authOpen = ref(false)

const initial = computed(() => {
  const u = user.value
  const s = (u && (u.displayName || u.email)) || '?'
  return s.charAt(0).toUpperCase()
})

async function doLogout () {
  await logout()
  screen.value = 'start'
}

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
