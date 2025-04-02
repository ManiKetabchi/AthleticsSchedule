import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLicPgP3h6a0EqMEQvazUokILFir2TC2Q",
  authDomain: "athleticsschedule-36c5e.firebaseapp.com",
  projectId: "athleticsschedule-36c5e",
  storageBucket: "athleticsschedule-36c5e.firebasestorage.app",
  messagingSenderId: "1029712586839",
  appId: "1:1029712586839:web:ea9de79b9ccd3dde595b12"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");

