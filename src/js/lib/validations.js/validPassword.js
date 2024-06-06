export function validPassword(password) {
  let level = 0;
  let alert = "";

  if (password.length < 8) {
    alert += " Tiene que tener al menos 8 caracteres. ";
  } else {
    level += 1;
  }

  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    level += 1;
  } else {
    alert += " Usar mayúsculas y minúsculas. ";
  }

  if (password.match(/\d/)) {
    level += 1;
  } else {
    alert += " Mínimo 1 número. ";
  }

  if (password.match(/[^a-zA-Z\d]/)) {
    level += 1;
  } else {
    alert += " Mínimo un carácter especial. ";
  }

  if (level < 2) {
    return "Contraseña fácil. " + alert;
  } else if (level === 2) {
    return "Contraseña de media dificultad. " + alert;
  } else if (level === 3) {
    return "Contraseña difícil. " + alert;
  } else {
    return "Contraseña muy difícil. " + alert;
  }
}
