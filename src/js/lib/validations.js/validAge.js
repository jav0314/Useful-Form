export function validAge() {
  const ageOptions = document.getElementsByName("user_age");
  for (let i = 0; i < ageOptions.length; i++) {
    if (ageOptions[i].checked) {
      return true;
    }
  }
  return false;
}
