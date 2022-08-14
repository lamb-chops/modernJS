
function getCard() {
    suit = Math.ceil(Math.random() * 4) //1= clubs, 2=spades, 3=hearts, 4=diamonds
    if ( suit = 1){
        suit = "C"
    }
    else if ( suit = 2){
        suit = "S"
    }
    else if ( suit = 3 ){
        suit = "H"
    }
    else suit = 'D'

    console.log(suit)
}