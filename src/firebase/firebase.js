import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDFWwVqYeDo4zG2lIDfBLe4eczvkNnLdto",
    authDomain: "dzynfox-b9303.firebaseapp.com",
    projectId: "dzynfox-b9303",
    storageBucket: "dzynfox-b9303.appspot.com",
    messagingSenderId: "866591289127",
    appId: "1:866591289127:web:a0b338a68bd14b11cb4302",
    measurementId: "G-E30SP8138H"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)