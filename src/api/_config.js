import axios from "axios";

import { initializeApp } from "firebase/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})


const BASE_URL = process.env.BASE_URL || "https://jsonplaceholder.typicode.com"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

const db = getFirestore();

export {
    db,
    firebase,
    axiosInstance
}