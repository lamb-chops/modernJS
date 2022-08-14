function isValidPassword(password, username) {
  charLength = password.length >= 8 ? true : false;
  containsSpaces = password.includes(" ") ? false : true;
  containsName = password.includes(username) ? false : true;

  if (charLength && containsSpaces && containsName) return true;
  else return false;
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr")); //true
console.log(isValidPassword("dogLuvr123!", "dogLuvr")); //false
