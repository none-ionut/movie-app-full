import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU5QKSAmqoksfyVsj4f7P7wviy7H_iaVM",
  authDomain: "movie-app-full.firebaseapp.com",
  projectId: "movie-app-full",
  storageBucket: "movie-app-full.appspot.com",
  messagingSenderId: "919662141588",
  appId: "1:919662141588:web:61457b7683235a4c3ad481",
  measurementId: "G-FP2PDY50LN",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
