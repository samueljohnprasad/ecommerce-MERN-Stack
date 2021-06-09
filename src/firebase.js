 import  firebase from  'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDp9zuk24tY-YvVjEJ4F4LrzPc2-dZBc1k",
    authDomain: "ecommerce-d6998.firebaseapp.com",
    projectId : "ecommerce-d6998",
    storageBucket: "ecommerce-d6998.appspot.com",
    messagingSenderId: "865042876335",
    appId: "1:865042876335:web:412110c690740bb0c5915a",
    measurementId: "G-HLFGCR9BV2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  //export 
  export const auth =firebase.auth();
  export const  googleAuthProvider = new firebase.auth.GoogleAuthProvider();