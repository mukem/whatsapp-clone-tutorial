// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIEBDTMCuhilXaIn6fyO8Dk7nqgzJwsb0",
    authDomain: "whatsappclone-d5a91.firebaseapp.com",
    projectId: "whatsappclone-d5a91",
    storageBucket: "whatsappclone-d5a91.appspot.com",
    messagingSenderId: "157662041030",
    appId: "1:157662041030:web:28bd8df908b319b878d8c7",
    measurementId: "G-WMM8JZ2MY7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthprovider();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;