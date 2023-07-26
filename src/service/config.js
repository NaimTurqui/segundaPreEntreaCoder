import {
    initializeApp
} from "firebase/app";

import {
    getFirestore
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA_MqpZGsC7rpAmFIjo8uwrYbmNoZIpn1Q",
    authDomain: "curso-react-prueba1.firebaseapp.com",
    projectId: "curso-react-prueba1",
    storageBucket: "curso-react-prueba1.appspot.com",
    messagingSenderId: "274674065733",
    appId: "1:274674065733:web:2d6c808884ea4fd9175e2c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);