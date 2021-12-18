function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal anywhere on the page
window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
};

// Close modal on X spot - function 
function closeModal() {
  modalbg.style.display = "none";
};
// Close modal on X spot - event 
modalCross[0].addEventListener ("click", closeModal);



const form = document.getElementById("form"); 
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentNb = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;



// validation 
/** 
const validation = document.getElementById ('checkbox1')

const errorLast = document.getElementById ('errorLast');
const errorMail = document.getElementById ('errorMail');
errorMail.dataset.errorVisible = "true"
const errorBirth = document.getElementById ('errorBirthdate');
const errorQuantity = document.getElementById ('errorQuantity');
const errorCity = document.getElementById ('errorCity');
const errorValidation = document.getElementById ('errorValidation');*/

// confirmation

const confirmation = document.getElementById ('confirmation');




document.getElementById("form").addEventListener('submit', function(event){
  functSubmit(event);
});

form.addEventListener('submit', e => {
  e.preventDefault();
});

// alert error

function validate () {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let conditionsChecked;


  console.log(birthDate.value)


if (
  !firstName.value.match("^[a-z A-Z]*$", "g") ||
  firstName.value == " " ||
  firstName.value == null ||
  firstName.value.length < 2
) {
  const firstNameFormData = document.getElementById("firstName")
  firstNameFormData.setAttribute("data-error-visible",true)
  firstNameFormData.setAttribute("data-error", "Veuillez entrer deux caractères minimum")
} else {
  firstNameFormData.setAttribute("data-error-visible",false)
  firstNameFormData.setAttribute("data-error", "")
  firstChecked = true;
}

if (
  !lastName.value.match("^[a-z A-Z]*$", "g") ||
  lastName.value == " " ||
  lastName.value == null ||
  lastName.value.length < 2
) {
  const lastNameFormData = document.getElementById("lastName")
  lastNameFormData.setAttribute("data-error-visible",true)
  lastNameFormData.setAttribute("data-error", "Veuillez entrer deux caractères minimum")
} else {
  lastNameFormData.setAttribute("data-error-visible",false)
  lastNameFormData.setAttribute("data-error", "")
  lastChecked = true;
}

if (
  !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(
    eMail.value
  )
) {
  const eMailFormData = document.getElementById("eMail")
  eMailFormData.setAttribute("data-error-visible",true)
  eMailFormData.setAttribute("data-error", "Veuillez entrer une adresse email valide")
} else {
  eMailFormData.setAttribute("data-error-visible",false)
  eMailFormData.setAttribute("data-error", "")
  mailChecked = true;
}

if (
  !birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)
) {
  const birthDateFormData = document.getElementById("birthDate")
  birthDateFormData.setAttribute("data-error-visible",true)
  birthDateFormData.setAttribute("data-error", "Vous devez entrer votre date de naissance.")
} else {
  birthDateFormData.setAttribute("data-error-visible",false)
  birthDateFormData.setAttribute("data-error", "")
  birthChecked = true;
}

if (!tournamentNb.value.match(numbers)) {
  const tournamentNbFormData = document.getElementById("tournamentNb")
  tournamentNbFormData.setAttribute("data-error-visible",true)
  tournamentNbFormData.setAttribute("data-error", "Vous devez indiquer un nombre.")
} else {
  tournamentNbFormData.setAttribute("data-error-visible",false)
  tournamentNbFormData.setAttribute("data-error", "")
  tournamentChecked = true;
}

if (
  !location1.checked &&
  !location2.checked &&
  !location3.checked &&
  !location4.checked &&
  !location5.checked &&
  !location6.checked
) {
  const locationFormData = document.getElementById("location")
  locationFormData.setAttribute("data-error-visible",true)
  locationFormData.setAttribute("data-error", "Vous devez choisir une ville.")
} else {
  locationFormData.setAttribute("data-error-visible",false)
  locationFormData.setAttribute("data-error", "")
  radioChecked = true;
}

if (!validation.checked) {
  const validationFormData = document.getElementById("validation")
  validationFormData.setAttribute("data-error-visible",true)
  validationFormData.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.")
} else {
  validationFormData.setAttribute("data-error-visible",false)
  validationFormData.setAttribute("data-error", "")
  conditionsChecked = true;
};


 // Confirmation when submit succeed 

 if (firstChecked == true && lastChecked == true && mailChecked == true && tournamentChecked == true && radioChecked == true && conditionsChecked == true && birthChecked == true) {
  form.style.display = "None";
  confirmation.innerText = "Merci ! Votre réservation a été reçue"
  confirmation.style.fontSize = "1.4rem";
  confirmation.style.display = "flex";
}
}


