import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
    
  };
  const app =firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()