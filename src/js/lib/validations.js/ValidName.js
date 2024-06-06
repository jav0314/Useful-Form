export function validName(name) {
  const formatName = /^[A-Za-z]+$/;
  return name.length <= 100 && formatName.test(name);
}
