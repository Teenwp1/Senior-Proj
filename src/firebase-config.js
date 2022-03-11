import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDjj2p3RUZ45ifTjXtCkuKHy8GmTvFh3bw',
  authDomain: 'senior-project-efb4d.firebaseapp.com',
  projectId: 'senior-project-efb4d',
  storageBucket: 'senior-project-efb4d.appspot.com',
  messagingSenderId: '243364100654',
  appId: '1:243364100654:web:b08a9276ea7bf7f1673dbf',
  measurementId: 'G-ZFP01S7D1J',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
