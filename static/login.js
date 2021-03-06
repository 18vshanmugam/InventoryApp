function doLogin() {
  
  firebase.auth().signOut().then(function() {
     var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);

    var user = firebase.auth().currentUser;
    if(!user) {
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(user);
          window.location.replace("main");
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log("error " + errorMessage);
        });
    }
  }, function(error) {
    // An error happened.
  });
}
