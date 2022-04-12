// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCm80kk5P_7arFyh-p2WXIGnAkbzppwIr8",
  authDomain: "formlogin-64299.firebaseapp.com",
  projectId: "formlogin-64299",
  storageBucket: "formlogin-64299.appspot.com",
  messagingSenderId: "670700686896",
  appId: "1:670700686896:web:d5abfe5d4c4ac6380ce7f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()


function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
  Toastify({
    text: "I'm a toast",
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    positionLeft: true, // `true` or `false`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
  }).showToast();
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

    // Done
    alert('User Logged In!!')

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