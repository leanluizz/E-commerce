
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBInBpvN2ytTcuonZKSzj0KMu3CQ9Y3cNg",
  authDomain: "shoeshooting-v2.firebaseapp.com",
  projectId: "shoeshooting-v2",
  storageBucket: "shoeshooting-v2.appspot.com",
  messagingSenderId: "740697136190",
  appId: "1:740697136190:web:0172f9069d01964750856f",
  measurementId: "G-G64VFHSMBH"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)