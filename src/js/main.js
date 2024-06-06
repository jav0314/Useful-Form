import { validAge } from "./lib/validations.js/validAge";
import { validMail } from "./lib/validations.js/validEmail";
// import {validForm} from "./lib/validations.js/validForm";
import { validName } from "./lib/validations.js/ValidName";
import { validPassword } from "./lib/validations.js/validPassword";
import { messages } from "./lib/const.js/massages";

function validForm(event) {
  const inputEmail = document.getElementById("mail").value;
  const inputName = document.getElementById("name").value;
  const inputPass = document.getElementById("password").value;
  let bio = document.getElementById("bio").value;
  let isValid = true;

  clearAlerts();

  if (!validName(inputName)) {
    event.preventDefault();
    showAlert("nameAlert", messages[5]);
    isValid = false;
  }

  if (!validMail(inputEmail)) {
    event.preventDefault();
    showAlert("emailAlert", messages[4]);
    isValid = false;
  }

  const passwordValidationMessage = validPassword(inputPass);
  if (passwordValidationMessage.includes("Contraseña fácil")) {
    event.preventDefault();
    showAlert("passwordAlert", passwordValidationMessage);
    isValid = false;
  }

  if (!validAge()) {
    event.preventDefault();
    showAlert("ageAlert", messages[6]);
    isValid = false;
  }

  if (bio.trim().length === 0) {
    event.preventDefault();
    showAlert("bioAlert", messages[1]);
    isValid = false;
  }

  if (bio.length > 50) {
    event.preventDefault();
    showAlert("bioAlert", messages[0]);
    isValid = false;
  }

  if (isValid) {
    alert(messages[3]);
  }
}

function clearAlerts() {
  document.getElementById("nameAlert").innerText = "";
  document.getElementById("emailAlert").innerText = "";
  document.getElementById("passwordAlert").innerText = "";
  document.getElementById("ageAlert").innerText = "";
  document.getElementById("bioAlert").innerText = "";
}

function showAlert(elementId, message) {
  document.getElementById(elementId).innerText = message;
}

document.getElementById("formTest").addEventListener("submit", validForm);

document.getElementById("password").addEventListener("blur", function () {
  const password = this.value;
  const strengthMessage = validPassword(password);
  showAlert("passwordAlert", strengthMessage);
});
