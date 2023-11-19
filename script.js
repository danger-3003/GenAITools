ScrollReveal().reveal('.reveal', {delay:1,easing:"ease-in-out",interval:0,scale:0.95,reset:true});
ScrollReveal().reveal('.rotate-div', {rotate: {x: 10,z: 10},reset:true,delay:1,origin:'left',delay:10,easing:'ease-in-out'});

var menu=document.getElementById("menu");
var button=document.getElementById("bars");
var nav=document.querySelectorAll(".nav");
var note=document.getElementById("Notice");
var cont=document.getElementById("continue");
var submit=document.getElementById("contactform");
button.addEventListener("click",()=>
{
    if(button.classList.contains("fa-bars"))
    {
        button.classList.replace("fa-bars","fa-times");
        menu.classList.replace("h-0","h-[10.5rem]");
        menu.classList.replace("-top-28","top-0");
        menu.classList.remove("opacity-0");
    }
    else
    {
        button.classList.replace("fa-times","fa-bars");
        menu.classList.replace("h-[10.5rem]","h-0");
        menu.classList.replace("top-0","-top-28");
        menu.classList.add("opacity-0");
    }
})

cont.addEventListener('click', ()=>
{
    note.classList.add("hidden");
})

function sendmail()
{
  let name=document.getElementById("name").value;
  let review=document.getElementById("review").value;
  Email.send(
    { 
      SecureToken : "c2c68509-91f0-4fda-9a6b-1d75e209724c",
      To : 'naremsumanth@gmail.com',
      From : 'ytprogamer1213@gmail.com',
      Subject : "Generative AI Tools",
      Body : name +" have succesfully submited the form.\nReview: "+review
    }
    ).then(message => {
      if(message=='OK')
      {
        swal("successfull", "We've got your review!", "success");
      }
      else
      {
        swal("Failed", "Something went wrong", "error");
      }
    });
}

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
}
const saveMessages = (name, email, review) => 
{
  var newcontactform = contactformDB.push();
  newcontactform.set(
    {
      name: name,
      email: email,
      review: review,
    });
    
  document.getElementById("contactform").reset();
};
const getElementVal = (id) => 
{
  return document.getElementById(id).value;
};