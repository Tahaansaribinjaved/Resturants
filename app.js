// alert('taha');
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    setDoc,
    query, where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Import Firebase modules


const exampleModal = document.getElementById('exampleModal');
if (exampleModal) {
    exampleModal.addEventListener('show.mdb.modal', (e) => {
        // Button that triggered the modal
        const button = e.relatedTarget;
        // Extract info from data-mdb-* attributes
        const recipient = button.getAttribute('data-mdb-whatever');
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title');
        const modalBodyInput = exampleModal.querySelector('.modal-body input');
    });
}


const firebaseConfig = {
    apiKey: "AIzaSyDgVefiwqVgllDgVBm3vEFZZ7jAteP42pY",
    authDomain: "resturants-9bce8.firebaseapp.com",
    projectId: "resturants-9bce8",
    storageBucket: "resturants-9bce8.appspot.com",
    messagingSenderId: "229070023933",
    appId: "1:229070023933:web:1d57cc378454a25f9e2294",
    measurementId: "G-KWTBC3Z6T6"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton");
const signInButtonu = document.getElementById("signInButtonu");

const userSignIn = async (button) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        location.href = './adminindex.html';

        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
    }
};
const userSignInu = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        location.href = './userindex.html';

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
    }
};

// const userSignOut = async () => {
//     try {
//         await signOut(auth);
//         alert("You have signed out successfully!");
//     } catch (error) {
//         console.error(error);
//     }
// };
if(signInButton){

    signInButton.addEventListener('click', userSignIn);
}if(signInButtonu){

    signInButtonu.addEventListener('click', userSignInu);
}

let admin_index_signup_btn = document.querySelector('#admin-index-signup-btn');
if (admin_index_signup_btn) {
    admin_index_signup_btn.addEventListener('click', () => {
        location.href = './adminsignup.html';
    });
}

let admin_index_signin_btn = document.querySelector('#admin-index-signin-btn');
if (admin_index_signin_btn) {
    admin_index_signin_btn.addEventListener('click', () => {
        location.href = './adminsignin.html';
    });
}


let user_index_signup_btn = document.querySelector('#user-index-signup-btn');
if (user_index_signup_btn) {
    user_index_signup_btn.addEventListener('click', () => {
        location.href = './usersignup.html';
    });
}

let user_index_signin_btn = document.querySelector('#user-index-signin-btn');
if (user_index_signin_btn) {
    user_index_signin_btn.addEventListener('click', () => {
        location.href = './usersignin.html';
    });
}

//        authentication

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Signed up
let btn = document.querySelector('#admin-signup-btn');
if (btn) {
    btn.addEventListener('click', async () => {
        let email = document.querySelector('#admin-signup-email').value;
        let password = document.querySelector('#admin-signup-password').value;
        let companyName = document.querySelector('#admin-signup-company').value;

        if (email == ""&& password == ""&& companyName=="") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pleace Enter Email and password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        } else {
            
            try {
                ubtn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>`
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your Acount ${email} has been   registered `,
                    showConfirmButton: false,
                    timer: 1500
                });
                const docRef = await addDoc(collection(db, "admins"), {
                    email: email,
                    company :companyName,
                    uid:user.uid
                    // Avoid storing passwords in plain text, consider alternative approaches
                    // password: password
                });
                console.log("Document written with ID: ", docRef.id);
                location.href = './adminsignin.html';
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email and password",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        }
    });
}

// Login
let btn1 = document.querySelector('#admin-signin-btn');
if (btn1) {
    btn1.addEventListener('click', () => {
        let email = document.querySelector('#admin-signin-email').value;
        let password = document.querySelector('#admin-signin-password').value;
        let company = document.querySelector('#admin-signin-company').value;
        if (email == "" && password == ""&&company=="" ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pleace Enter Email and password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        } else {

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                    btn1.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </button>`
                    setTimeout(() => {
                        Swal.fire({
                            title: "Good job!",
                            text: "You Account has been log in ",
                            icon: "success"
                        });

                        
                    }, 4500)
                    setTimeout(() => {
                        location.href = './adminindex.html';
                    }, 5000)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "This Email and password are not registered",
                        footer: '<a href="./index.html">Please sign up</a>'
                    });
                    location.href= './adminsignup.html'
                    
                });
        }
    });
}


// user Signed up
let ubtn = document.querySelector('#user-signup-btn');
if (ubtn) {
    ubtn.addEventListener('click', async () => {
        let email = document.querySelector('#user-signup-email').value;
        let password = document.querySelector('#user-signup-password').value;

        if (email == ""&& password == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pleace Enter Email and password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        } else {
            
            try {
                ubtn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>`
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Your Acount ${email} has been   registered `,
                    showConfirmButton: false,
                    timer: 1500
                });
                const docRef = await addDoc(collection(db, "users"), {
                    email: email,
                    
                    uid:user.uid
                    // Avoid storing passwords in plain text, consider alternative approaches
                    // password: password
                });
                console.log("Document written with ID: ", docRef.id);
                location.href = './usersignin.html';
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email and password",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        }
    });
}

// Login
let ubtn1 = document.querySelector('#user-signin-btn');
if (ubtn1) {
    ubtn1.addEventListener('click', () => {
        let email = document.querySelector('#user-signin-email').value;
        let password = document.querySelector('#user-signin-password').value;
        if (email == "" && password == "" ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pleace Enter Email and password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        } else {

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                    btn1.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </button>`
                    setTimeout(() => {
                        Swal.fire({
                            title: "Good job!",
                            text: "You Account has been log in ",
                            icon: "success"
                        });

                        
                    }, 4500)
                    setTimeout(() => {
                        location.href = './userindex.html';
                    }, 5000)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "This Email and password are not registered",
                        footer: '<a href="./index.html">Please sign up</a>'
                    });
                    location.href= './userindex.html'
                    
                });
        }
    });
}


