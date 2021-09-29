import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC-KMEFrYqfei7lrN0_wDK_YUF30arD17o",
  authDomain: "anabiko.firebaseapp.com",
  databaseURL: "https://anabiko-default-rtdb.firebaseio.com",
  projectId: "anabiko",
  storageBucket: "anabiko.appspot.com",
  messagingSenderId: "786126870121",
  appId: "1:786126870121:web:6c2b2f5de2a5f3f57034f8"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app