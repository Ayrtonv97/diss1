import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyA2mGn17kowxXHsverVvKVeJTFEbeaK8V8",
        authDomain: "diss1-55cdd.firebaseapp.com",
        databaseURL: "https://diss1-55cdd.firebaseio.com",
        projectId: "diss1-55cdd",
        storageBucket: "diss1-55cdd.appspot.com",
        messagingSenderId: "252957799752",
        appId: "1:252957799752:web:c5896a7f4b7cb6672f6f7d",
        measurementId: "G-3FCCZX97L7"
    };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
