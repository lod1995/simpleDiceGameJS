// function to invoke code on click

document.getElementById('btnOne').addEventListener('click', function() {


// generate the first random number

var randomNumber = Math.floor(Math.random() * 6 +1);
const diceOne = 'assets/dice' + randomNumber + '.png';


document.querySelectorAll('img')[0].setAttribute('src', diceOne);



//user two starts here --------- ****

var secondRandomNumber = Math.floor(Math.random() * 6 +1);
const diceTwo = 'assets/dice' + secondRandomNumber + '.png';


document.querySelectorAll('img')[1].setAttribute('src', diceTwo);


//if statement logic ---- //


if(randomNumber === secondRandomNumber){
  var draw = alert("It's a draw")
}else if(randomNumber < secondRandomNumber){
  var winnerOne = alert("WINNER - Player1")
}else{
  if(secondRandomNumber < randomNumber){
    var winnerTwo = alert("WINNER - Player2")
  }
};


});
