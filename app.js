const exampleModal = document.getElementById('exampleModal');
if(exampleModal){

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
        
        modalTitle.textContent = `New message to ${recipient}`;
        modalBodyInput.value = recipient;
    })
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDgVefiwqVgllDgVBm3vEFZZ7jAteP42pY",
    authDomain: "resturants-9bce8.firebaseapp.com",
    projectId: "resturants-9bce8",
    storageBucket: "resturants-9bce8.appspot.com",
    messagingSenderId: "229070023933",
    appId: "1:229070023933:web:1d57cc378454a25f9e2294",
    measurementId: "G-KWTBC3Z6T6"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()

  const signInButton = document.getElementById("signInButton");
  const signInButtonu = document.getElementById("signInButtonu");
  
  
  const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
    })
  }
  const userSignInu = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
    })
  }

//   const userSignOut = async() => {
//     signOut(auth).then(() => {
//         alert("You have signed out successfully!");
//     }).catch((error) => {})
//   }

signInButton.addEventListener('click', userSignIn);
signInButtonu.addEventListener('click', userSignInu);
// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });
import { SomeComponent } from 'mdb-ui-kit';



