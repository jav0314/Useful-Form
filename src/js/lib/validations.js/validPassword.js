export function validPassword(password) {
  let level = 0;
  let alert = "";
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;

  if (regex.test(password)) {
    level += 1;
  } else {
    alert += " No cumple con los requisitos establecidos.";
  }

  if (level < 1) {
    return "Contraseña invalida. " + alert;
  } else {
    return "Contraseña cumple los requisitos. " + alert;
  }
}
