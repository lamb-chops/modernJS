function getCard() {
  suit = Math.floor(Math.random() * 4); //1= clubs, 2=spades, 3=hearts, 4=diamonds
  if (suit == 1) {
    suit = "C";
  } else if (suit == 2) {
    suit = "S";
  } else if (suit == 3) {
    suit = "H";
  } else suit = "D";

  const cards = "2 3 4 5 6 7 8 9 J Q K A";
  const cardsArray = cards.split(" ");
  let cardNum = Math.floor(Math.random() * cardsArray.length);
  let returnCard = cardsArray[cardNum];

  const returnObject = {
    suitSelected: suit,
    cardSelected: returnCard,
  };
  return returnObject;
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
