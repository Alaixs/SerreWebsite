// Config de firebase
var firebaseConfig = {
    apiKey: "AIzaSyCm80kk5P_7arFyh-p2WXIGnAkbzppwIr8",
    authDomain: "formlogin-64299.firebaseapp.com",
    projectId: "formlogin-64299",
    storageBucket: "formlogin-64299.appspot.com",
    messagingSenderId: "670700686896",
    appId: "1:670700686896:web:d5abfe5d4c4ac6380ce7f5"
	};
  // initialisation de Firebase
  firebase.initializeApp(firebaseConfig);
  // initialisation de variables
  const auth = firebase.auth()
  const database = firebase.database()
   // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
   
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
      locationObj = document.location
      document.location = 'http://www.mozilla.org'
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }