import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1MPQcx1SojrVGwofjQDLt67x-a6RSD-0",
    authDomain: "horizonte-28893.firebaseapp.com",
    projectId: "horizonte-28893",
    storageBucket: "horizonte-28893.appspot.com",
    messagingSenderId: "201887514328",
    appId: "1:201887514328:web:47eb3e33acda95283721ad"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);