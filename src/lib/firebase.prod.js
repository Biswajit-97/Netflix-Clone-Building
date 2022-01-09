import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyApVa7gbnFo_u2LLOKW0jGiMBX0z6Ngrwg",
    authDomain: "netflix-clone-ccfd1.firebaseapp.com",
    projectId: "netflix-clone-ccfd1",
    storageBucket: "netflix-clone-ccfd1.appspot.com",
    messagingSenderId: "545062476661",
    appId: "1:545062476661:web:47cd20fb6750f4df3d513c"
};

const firebase = Firebase.initializeApp(config);



export { firebase };