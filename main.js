const firebaseConfig = {
    apiKey: "AIzaSyBKyKPlznJ4fZ8BQVVHkYTiDWtTj9z8Dbk",
    authDomain: "contactform-d99c1.firebaseapp.com",
    databaseURL: "https://contactform-d99c1-default-rtdb.firebaseio.com",
    projectId: "contactform-d99c1",
    storageBucket: "contactform-d99c1.appspot.com",
    messagingSenderId: "448362942409",
    appId: "1:448362942409:web:3d8474b0cf46671e0ba218"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('contactForm');
  var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("SIGN IN", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};