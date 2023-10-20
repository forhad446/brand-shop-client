import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaObdGUlYRf13aibMbrK94DNHAV6OVkpE",
  authDomain: "mr-computer-303fc.firebaseapp.com",
  projectId: "mr-computer-303fc",
  storageBucket: "mr-computer-303fc.appspot.com",
  messagingSenderId: "230487085556",
  appId: "1:230487085556:web:b6c149b2c00baec502a9a1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);