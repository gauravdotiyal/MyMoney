import firebase from "firebase";
import  'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUOoKcsWw0WRyUYzPOOw_wc3pibzECpjE",
    authDomain: "mymoney-59877.firebaseapp.com",
    projectId: "mymoney-59877",
    storageBucket: "mymoney-59877.appspot.com",
    messagingSenderId: "554925539316",
    appId: "1:554925539316:web:7772f4d1a546d58e50c3a1"
  };

  //init firebase 
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore=firebase.firestore()
  const projectAuth=firebase.auth()

  export{projectFirestore,projectAuth}