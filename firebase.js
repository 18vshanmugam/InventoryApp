  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqLUmATpNRb3l1f0-lic-_JaO3kC46yLE",
    authDomain: "inventory-app-1b1db.firebaseapp.com",
    databaseURL: "https://inventory-app-1b1db.firebaseio.com",
    projectId: "inventory-app-1b1db",
    storageBucket: "inventory-app-1b1db.appspot.com",
    messagingSenderId: "426972035523"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();