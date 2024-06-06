export function validMail(mail) {
  const formatMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return formatMail.test(mail);
}
