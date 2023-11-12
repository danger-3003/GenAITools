
const firebaseConfig = {
    apiKey: "AIzaSyAIP52nAPuV5yEnSwRKke-c0LdxlSnNp1k",
    authDomain: "contact-form-610ff.firebaseapp.com",
    databaseURL: "https://contact-form-610ff-default-rtdb.firebaseio.com",
    projectId: "contact-form-610ff",
    storageBucket: "contact-form-610ff.appspot.com",
    messagingSenderId: "561841052998",
    appId: "1:561841052998:web:287fb16ae19d512bf91947"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactformDB = firebase.database().ref("contactform");
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var review = getElementVal("review");
  
    saveMessages(name, email, review);
  
  
    //   reset the form
    document.getElementById("contactform").reset();
  }
  
  const saveMessages = (name, email, review) => {
    var newcontactform = contactformDB.push();
  
    newcontactform.set({
      name: name,
      email: email,
      review: review,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };