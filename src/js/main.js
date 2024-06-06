import { validForm, showAlert } from "./lib/validations.js/validForm";
import { validPassword } from "./lib/validations.js/validPassword";

document.getElementById("formTest").addEventListener("submit", validForm);

document.getElementById("password").addEventListener("blur", function () {
  const password = this.value;
  const strengthMessage = validPassword(password);
  showAlert("passwordAlert", strengthMessage);
});
