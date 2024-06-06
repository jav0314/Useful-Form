import { validAge } from "./validAge";
import { validMail } from "./validEmail";
import { validName } from "./ValidName";
import { validPassword } from "./validPassword";
import { messages } from "../const.js/massages";

export function validForm(event) {
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

export function showAlert(elementId, message) {
  document.getElementById(elementId).innerText = message;
}
