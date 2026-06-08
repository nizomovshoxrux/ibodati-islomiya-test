// Firebase ulanishi.
// firebaseConfig'ni Firebase Console'dan oling va shu yerga qo'ying.
// Bu qiymatlar maxfiy emas — brauzerda ochiq bo'lishi normal (xavfsizlik Firestore qoidalari bilan).

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAHn5JlMxtsspw-5A9o0L7XIgECU7Sto6o',
  authDomain: 'my-first-project-e7c73.firebaseapp.com',
  databaseURL: 'https://my-first-project-e7c73.firebaseio.com',
  projectId: 'my-first-project-e7c73',
  storageBucket: 'my-first-project-e7c73.firebasestorage.app',
  messagingSenderId: '47226181910',
  appId: '1:47226181910:web:53b4845caac351b2741837',
  measurementId: 'G-FFKBMEERRP'
}

// Config to'ldirilgan bo'lsa, Firebase yoqiladi. Aks holda ilova local rejimda ishlaydi.
export const firebaseEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId)

let auth = null
let db = null

if (firebaseEnabled) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { auth, db }
