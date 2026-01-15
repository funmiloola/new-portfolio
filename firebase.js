import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "my-portfolio-a88c9.firebaseapp.com",
  projectId: "my-portfolio-a88c9",
  storageBucket: "my-portfolio-a88c9.firebasestorage.app",
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_APP_ID,
  databaseUrl:import.meta.env.VITE_DATABASE_URL,
  measurementId:import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app)