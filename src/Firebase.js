
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your apikey",
  authDomain: "your auth domain",
  projectId: "auth-14927",
  storageBucket: "your storage bucket",
  messagingSenderId: "your sender id",
  appId: "your appId",
  measurementId: "G-SM6BNFY0H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
          const name = result.user.displayName;
          const email = result.user.email;
            const photoUrl = result.user.photoURL;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem("photoUrl" , photoUrl);
      })
      .then((error)=>{
        console.log(error);
      })
  }