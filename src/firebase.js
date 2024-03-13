import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDH-3KpZBmC9dvSY5oAa541Mg1QwTKh8no",
    authDomain: "democpp-49a55.firebaseapp.com",
    projectId: "democpp-49a55",
    storageBucket: "democpp-49a55.appspot.com",
    messagingSenderId: "463005264936",
    appId: "1:463005264936:web:160d8655d202a5fa74991d",
    measurementId: "G-W8N8RPBZ4D"
    };

    const firebaseApp = initializeApp(firebaseConfig);

    export default firebaseApp;
