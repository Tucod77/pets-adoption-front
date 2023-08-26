import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker'
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOn4rvbpCFLOvoW76z9ff3v85dycWWEec",
  authDomain: "adoteseupetcuritiba.firebaseapp.com",
  projectId: "adoteseupetcuritiba",
  storageBucket: "adoteseupetcuritiba.appspot.com",
  messagingSenderId: "996290793529",
  appId: "1:996290793529:web:4ba940832ee1015d4b3de8",
  measurementId: "G-CV02YW7ELP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();