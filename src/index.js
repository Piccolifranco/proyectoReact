import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXhOjmXHEDgO7-gtjFOOfSJ4dbEyIjgmg",
  authDomain: "fir-de-carrito-de-2g.firebaseapp.com",
  projectId: "fir-de-carrito-de-2g",
  storageBucket: "fir-de-carrito-de-2g.appspot.com",
  messagingSenderId: "632799275086",
  appId: "1:632799275086:web:6f517cec84f1e434e9fb1f",
  measurementId: "G-0KS6R3S7YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
