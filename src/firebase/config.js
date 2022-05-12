import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPoysIlgsG1sdeqrCk0VtVwoPNTRGnOIo",
    authDomain: "olx-clone-7a115.firebaseapp.com",
    projectId: "olx-clone-7a115",
    storageBucket: "olx-clone-7a115.appspot.com",
    messagingSenderId: "333775529100",
    appId: "1:333775529100:web:6e070634276601d97b47a9",
    measurementId: "G-S9EFCWRLKC"
  };

  export default firebase.initializeApp(firebaseConfig)