import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCFXQfDafzzuiLG6gO62l-8nIypXmoXU",
  authDomain: "sportswear-1c743.firebaseapp.com",
  projectId: "sportswear-1c743",
  storageBucket: "sportswear-1c743.appspot.com",
  messagingSenderId: "494443192850",
  appId: "1:494443192850:web:63208cf35c7f6672136ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}