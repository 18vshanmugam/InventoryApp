var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log(user);
     $("#welcome").text("Welcome " + user.displayName);
  } else {
     window.location.replace("/");
  }
});