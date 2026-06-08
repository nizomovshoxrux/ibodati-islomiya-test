<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)"
    max-width="430" :fullscreen="$vuetify.display.xs">
    <v-card class="pa-2">
      <v-card-text class="pt-5">
        <div class="text-center mb-5">
          <v-avatar color="primary" size="56" class="mb-2">
            <v-icon icon="mdi-account-circle" size="36" />
          </v-avatar>
          <h2 class="text-h6 font-weight-bold">{{ isLogin ? 'Hisobga kirish' : 'Ro\'yxatdan o\'tish' }}</h2>
          <p class="text-caption text-medium-emphasis">Natijalaringiz bazada saqlanadi</p>
        </div>

        <v-tabs v-model="tab" grow color="primary" class="mb-4">
          <v-tab value="login">Kirish</v-tab>
          <v-tab value="register">Ro'yxatdan o'tish</v-tab>
        </v-tabs>

        <v-form @submit.prevent="submit">
          <v-text-field
            v-if="!isLogin" v-model="name" label="Ism" variant="outlined"
            density="comfortable" prepend-inner-icon="mdi-account" class="mb-2" hide-details
          />
          <v-text-field
            v-model="email" label="Email" type="email" variant="outlined"
            density="comfortable" prepend-inner-icon="mdi-email" class="mb-2" hide-details
            autocomplete="email"
          />
          <v-text-field
            v-model="password" label="Parol" :type="show ? 'text' : 'password'"
            variant="outlined" density="comfortable" prepend-inner-icon="mdi-lock"
            :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="show = !show" class="mb-1" hide-details
            autocomplete="current-password"
          />

          <v-alert v-if="error" type="error" variant="tonal" density="compact" class="mt-3 text-body-2">
            {{ error }}
          </v-alert>

          <v-btn
            type="submit" block size="large" color="primary" class="mt-4"
            :loading="loading" :disabled="!email || !password"
          >
            {{ isLogin ? 'Kirish' : 'Ro\'yxatdan o\'tish' }}
          </v-btn>
        </v-form>

        <v-btn variant="text" block class="mt-2" @click="$emit('update:modelValue', false)">Bekor qilish</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { login, register, authErrorMessage } from '../composables/useAuth.js'

const props = defineProps({
  modelValue: Boolean,
  startTab: { type: String, default: 'login' }
})
const emit = defineEmits(['update:modelValue', 'success'])

const tab = ref(props.startTab)

// Oyna ochilganda kerakli tabni ko'rsatamiz va xatoni tozalaymiz
watch(() => props.modelValue, (open) => {
  if (open) { tab.value = props.startTab; error.value = '' }
})
const isLogin = computed(() => tab.value === 'login')
const name = ref('')
const email = ref('')
const password = ref('')
const show = ref(false)
const loading = ref(false)
const error = ref('')

async function submit () {
  error.value = ''
  loading.value = true
  try {
    if (isLogin.value) {
      await login(email.value.trim(), password.value)
    } else {
      await register(email.value.trim(), password.value, name.value.trim())
    }
    emit('success')
    emit('update:modelValue', false)
    password.value = ''
  } catch (e) {
    error.value = authErrorMessage(e)
  } finally {
    loading.value = false
  }
}
</script>
