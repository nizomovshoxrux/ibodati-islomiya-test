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
        <v-btn v-else variant="tonal" color="primary" size="small" @click="openLogin">
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
    <AuthDialog v-model="authOpen" :start-tab="authStartTab" />

    <!-- Ro'yxatdan o'tishni tavsiya qiluvchi eslatma -->
    <v-dialog v-model="promptOpen" max-width="420" persistent>
      <v-card class="pa-2">
        <v-card-text class="text-center pt-6">
          <v-avatar color="secondary" size="60" class="mb-3">
            <v-icon icon="mdi-cloud-lock-outline" size="36" />
          </v-avatar>
          <h2 class="text-h6 font-weight-bold mb-2">Natijalaringiz saqlanib qolsin</h2>
          <p class="text-body-2 text-medium-emphasis">
            Ro'yxatdan o'tsangiz, test natijalaringiz va statistikangiz bazada saqlanadi —
            istalgan qurilmadan kirib, rivojlanishingizni kuzatib borasiz.
            Aks holda ma'lumotlar faqat shu qurilmada qoladi va brauzer tarixi tozalansa yo'qoladi.
          </p>
        </v-card-text>
        <v-card-actions class="flex-column ga-2 px-4 pb-4">
          <v-btn block size="large" color="primary" variant="flat" @click="goRegister">
            <v-icon start icon="mdi-account-plus" /> Ro'yxatdan o'tish
          </v-btn>
          <v-btn block variant="text" @click="dismissPrompt">Hozircha kerak emas</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
import { ref, computed, watch, onMounted } from 'vue'
import StartView from './components/StartView.vue'
import QuizView from './components/QuizView.vue'
import ResultView from './components/ResultView.vue'
import StatsView from './components/StatsView.vue'
import AuthDialog from './components/AuthDialog.vue'
import { startQuiz, startFromIds, finishQuiz, wrongIds } from './composables/useQuiz.js'
import { firebaseEnabled } from './firebase.js'
import { user, authReady, logout } from './composables/useAuth.js'

const screen = ref('start')
const session = ref(null)
const authOpen = ref(false)
const authStartTab = ref('login')
const promptOpen = ref(false)
const PROMPT_KEY = 'ibodat_auth_prompt_seen'

const initial = computed(() => {
  const u = user.value
  const s = (u && (u.displayName || u.email)) || '?'
  return s.charAt(0).toUpperCase()
})

async function doLogout () {
  await logout()
  screen.value = 'start'
}

// Kirilmagan bo'lsa, bir marta tavsiya eslatmasini ko'rsatamiz
function maybePrompt () {
  if (firebaseEnabled && authReady.value && !user.value &&
      !sessionStorage.getItem(PROMPT_KEY)) {
    promptOpen.value = true
  }
}
watch(authReady, () => maybePrompt(), { immediate: true })
watch(user, (u) => { if (u) promptOpen.value = false })

function goRegister () {
  sessionStorage.setItem(PROMPT_KEY, '1')
  promptOpen.value = false
  authStartTab.value = 'register'
  authOpen.value = true
}
function dismissPrompt () {
  sessionStorage.setItem(PROMPT_KEY, '1')
  promptOpen.value = false
}
function openLogin () {
  authStartTab.value = 'login'
  authOpen.value = true
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
