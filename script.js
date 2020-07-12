/**
1 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */
//
// Press enter to input
function inputLength() {
	return document.getElementById("number-guess").value.length;
}

function enterAfterKeypress(event) { 
  
  if (inputLength() > 0 && event.keyCode === 13){
      playGame();
  }
}


// Variable to store the list of guesses 
let guesslist = [];

// Variable for store the correct random number 
let CorrectRndomNum= RndmNumGen();
console.log(CorrectRndomNum);

window.onload = function() {
var r = confirm("Do you want to play!");
if (r) {
  startTimer();
  //RndmNumGen();
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
} else{ window.location.href= "https://google.com";}
}
//document.getElementsByClassName("form-control form-control-lg").addEventListener("keypress", enterAfterKeypress);
/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
 let numberGuess =document.getElementById("number-guess").value;
 // console.log(numberGuess);
  BannerisCorrect(numberGuess);//BANNER 
  if(numberGuess.length> 0){
  displayResult(numberGuess);//pass on numberGuess as a parameter
  saveGuessHistory(numberGuess);
  displayHistory();
  }
  /*if (numberGuess>CorrectRndomNum) {//showNumberAbove()
  console.log("too high")}
  else if (numberGuess<CorrectRndomNum) {//showNumberBelow()
  console.log("too low")}
  else  {//showYouWon()
  console.log("you won!")*/

}
BannerisCorrect=(numberGuess)=>{
  if (numberGuess == CorrectRndomNum){
    document.getElementById("banner").innerHTML= numberGuess+'!!';
    document.getElementById("banner").style.color=('green');
}
}

/*else if  (numberGuess=CorrectRndomNum) {//showYouWon()
  console.log("you won!")}*/

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
displayResult=(numberGuess)=>{
  if (numberGuess>CorrectRndomNum) {
    showNumberAbove()
    //console.log("too high")
  }
    else if (numberGuess<CorrectRndomNum) {
      showNumberBelow()
    //console.log("too low")
  }
    else  {
      stopTimer();
      showYouWon()
    //console.log("you won!")
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  //Reset the CorrectNumber
  //Reset result from showing
  //Reset the guesslist array 
  //Reset the guesshistory Display
  //HINT document.getElementById("myForm").reset();
  CorrectRndomNum=RndmNumGen();
  document.getElementById("result").innerHTML = ""; 
  document.getElementById("number-guess").value= "";
  document.getElementById("banner").innerHTML="#1-100";
  document.getElementById("banner").style.color=('#FFD23F');
  guesslist=[];
  stopTimer();
  displayHistory();
  console.log(CorrectRndomNum);
  document.getElementById("number-submit").removeAttribute('disabled');
  document.getElementById("number-guess").disabled=false;
  starter.removeAttribute('disabled');
  stoper.removeAttribute('disabled');
  startTimer();
}

/** 
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
//function getRandomNumber(){
  // *CODE GOES BELOW HERE *
//}
//let randomnum = Math.random();//Decimal value
//let wholenumber =Math.floor(num *100);/whole number value
function RndmNumGen(){
  let randomnumba= Math.random() 
   let wholenumber =Math.floor(randomnumba* 100)+ 1;//We add a 1 bcuz -Math.floor()- cannot add the # 1.=> Math.floor()=>0-99 
   return wholenumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(numberGuess) {
  // *CODE GOES BELOW HERE *
guesslist.push(numberGuess);
//console.log(guesslist);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index= guesslist.length -1; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while (index >= 0) {
    list+="<li class='list-group-item'>" + "You guessed" + " " + guesslist[index] +"</li>";index-=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
  
}
/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "ToHigh":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
      case "ToLow":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}


function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
let dialog =getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
let dialog = getDialog("ToHigh", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("ToLow", text);
  document.getElementById("result").innerHTML = dialog;
}



  