import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";import { getDatabase, ref, set, push } from
"https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDShtHTrl_xwcUBoBVkdHRQxMQH4RsQaZw",
  authDomain: "profile-f47bd.firebaseapp.com",
  projectId: "profile-f47bd",
  storageBucket: "profile-f47bd.firebasestorage.app",
  messagingSenderId: "569746035362",
  appId: "1:569746035362:web:333f7fd82135c21fc87dfb",
  measurementId: "G-FZW5P66BR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", function() {
    const form=document.getElementById("contactForm");
    form.addEventListener ("submit",(e)=>{
        e.preventDefault();
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const message=document.getElementById("message").value;
        if(!name==""||!email==""||!message==""){
            alert("Please fill all the fields");
        }
       const contactForm = {
        name,
        email,
        message
       }
    })
    console.log("contact form submitted",contactForm);
    const db=Window.firebaseDb();
    const contactFormref=ref(db,"contactForm");
    push(contactFormref,contactForm)
    .then(()=>{
        alert("Successfully submitted");})
        .catch((error)=>{
            alert("Error submitting",error);
        })

})
