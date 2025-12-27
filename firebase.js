import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "sppd-dc087.firebaseapp.com",
  projectId: "sppd-dc087",
  storageBucket: "sppd-dc087.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
