import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDCGemE_Ln2GwGFi1PoAa7S5D3r-DxJLKw',
  authDomain: 'e-com-bf9dc.firebaseapp.com',
  projectId: 'e-com-bf9dc',
  storageBucket: 'e-com-bf9dc.appspot.com',
  messagingSenderId: '236169300059',
  appId: '1:236169300059:web:a1e04ab6098215f60c177e',
  measurementId: 'G-M5PF7GTBLP',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.GoogleAuthProvider()
// export const auth = app.auth()
export { provider }
export default app
