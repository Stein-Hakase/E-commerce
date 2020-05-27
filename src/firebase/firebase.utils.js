import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAKXxLcNS-AdwNpkK1Qpu9ezdYLp7ktX34",
    authDomain: "clothes-store-c85a9.firebaseapp.com",
    databaseURL: "https://clothes-store-c85a9.firebaseio.com",
    projectId: "clothes-store-c85a9",
    storageBucket: "clothes-store-c85a9.appspot.com",
    messagingSenderId: "758371237726",
    appId: "1:758371237726:web:357babf17c880c675bd9cf",
    measurementId: "G-Y47P28LDJH"
  }
  firebase.initializeApp(config)
   export const auth=firebase.auth()
   export const firestore=firebase.firestore()
   const provider= new firebase.auth.GoogleAuthProvider()
   provider.setCustomParameters({ prompt:'select_account' })
   export const signInWithGoogle=()=>{
       auth.signInWithPopup(provider)
   }
   export default firebase