// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZEj0smJwH0il4c1GJWTFUoMfQGEawTOQ",
  authDomain: "absen-d19bb.firebaseapp.com",
  projectId: "absen-d19bb",
  storageBucket: "absen-d19bb.firebasestorage.app",
  messagingSenderId: "225809570326",
  appId: "1:225809570326:web:05375a0958ff8b3023f337",
  measurementId: "G-V87HTB02C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Function to add user data to Firestore
async function addUser(name, division, id) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            division: division,
            id: id
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Event listener for the form submission
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const name = document.querySelector('.form-input[name="name"]').value;
    const division = document.querySelector('.form-input[name="division"]').value;
    const id = document.querySelector('.form-input[name="id"]').value;

    addUser(name, division, id); // Call function to add data to Firestore
});
