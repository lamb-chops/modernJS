const alphabet = "abcdefghijklmnopqrstuvwxyz";

function isPanagram(sentence) {
  sentence = sentence.toLowerCase();
  found = true;
  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      found = false;
      break;
    }
  }
  console.log(found);
}

isPanagram("The five boxing wizards jump quickly"); //true
isPanagram("the five boxing wizards jump quick"); //false
