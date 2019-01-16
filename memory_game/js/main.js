//console.log('up and running!');

//console.log('User flipped ' + cardTwo);
//"queen" , "queen" ,"king" , "king"

 var cards =[{rank: "queen" , suit: "hearts" , cardImage:"images/queen-of-hearts.png" } ,
             {rank: "queen" , suit: "diamonds" , cardImage: "images/queen-of-diamonds.png"},
             {rank: "king"  , suit: "hearts" , cardImage: "images/king-of-hearts.png"},
             {rank: "king"  , suit: "diamonds" , cardImage: "images/king-of-diamonds.png"}]
 var cardsInPlay = [];

 var checkForMatch = function(){
   if (cardsInPlay[0] === cardsInPlay[1]){
     console.log("You found a match!");
   }else {
     console.log("Sorry, try again");
   }
 }

 var flipCard = function(cardId){

  //  var cardOne = cards[0];
  //  cardsInPlay.push(cardOne);
  //  console.log('User flipped ' + cardsInPlay[0]);
  //
  // var cardTwo = cards[2];
  // cardsInPlay.push(cardTwo)
  // console.log('User flipped ' + cardsInPlay[1]);
  // console.log( "User flipped " + card[cardId]);
  // cardsInPlay.push(cards[cardId]);

  if(cardsInPlay.length === 2){
     checkForMatch();
    console.log( "User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
 }

}

flipCard(0);
