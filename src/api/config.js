import axios from "axios";



// Firebase SDK
import firebase from "firebase/app";
import 'firebase/firestorm';
import 'firebase/auth';

// Firebase HOOKS
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
})

const auth = firebase.auth()
const firestore = firebase.firestore()



const BASE_URL = process.env.BASE_URL || "https://jsonplaceholder.typicode.com"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
})
export default axiosInstance