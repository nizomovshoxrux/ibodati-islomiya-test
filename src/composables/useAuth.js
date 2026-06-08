import { ref } from 'vue'
import { auth, firebaseEnabled } from '../firebase.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'

export const user = ref(null)
export const authReady = ref(false)

if (firebaseEnabled) {
  onAuthStateChanged(auth, (u) => {
    user.value = u
    authReady.value = true
  })
} else {
  authReady.value = true
}

export async function register (email, password, name) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (name) await updateProfile(cred.user, { displayName: name })
  return cred.user
}

export async function login (email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}

export async function logout () {
  await signOut(auth)
}

// Firebase xato kodlarini o'zbekcha xabarga aylantirish
export function authErrorMessage (err) {
  const code = (err && err.code) || ''
  const map = {
    'auth/invalid-email': 'Email manzili noto\'g\'ri.',
    'auth/user-disabled': 'Bu hisob bloklangan.',
    'auth/user-not-found': 'Bunday foydalanuvchi topilmadi.',
    'auth/wrong-password': 'Parol noto\'g\'ri.',
    'auth/invalid-credential': 'Email yoki parol noto\'g\'ri.',
    'auth/email-already-in-use': 'Bu email allaqachon ro\'yxatdan o\'tgan.',
    'auth/weak-password': 'Parol juda sodda (kamida 6 belgi).',
    'auth/missing-password': 'Parolni kiriting.',
    'auth/too-many-requests': 'Juda ko\'p urinish. Birozdan keyin qayta urining.',
    'auth/network-request-failed': 'Internet aloqasi yo\'q.'
  }
  return map[code] || 'Xatolik yuz berdi. Qayta urinib ko\'ring.'
}
