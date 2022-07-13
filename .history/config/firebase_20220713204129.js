import { initializeApp, getApp } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';


let fireapp

try {
    fireapp = getApp()
} catch (error) {
    fireapp = initializeApp({
        apiKey: "AIzaSyBkqCpt7urvGI7bnDrB7J0Yw9Rq2tfZywI",
        authDomain: "aspect-user-auth.firebaseapp.com",
        projectId: "aspect-user-auth",
        storageBucket: "aspect-user-auth.appspot.com",
        messagingSenderId: "216064182431",
        appId: "1:216064182431:web:208ecca4a4c4ee323b3aaa",
        measurementId: "G-19KFZ48K0C"
    })
}

export const auth = getAuth()

const db = getFirestore(fireapp);

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.email,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

export { sendMessage, getMessages };