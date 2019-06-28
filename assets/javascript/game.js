// Change the screen to show the key press of the user
document.onkeyup = function(event) {
    var keyPress = event.key;
    document.getElementById('selectedLetter').innerHTML = keyPress;
}

// Create an array of words to be used in Hangman game
var wordsToGuess = ["Dolphins", "Hurricanes", "Marlins", "Panthers", "Heat"];
// Create a variable to store the length of the array to be used in the selectRandomNumber function
var lengthOfList = wordsToGuess.length;

// Create a function to select a random number between 0 and the length of wordsToGuess
function selectRandomNumber(number){
    var randomInteger = Math.floor(Math.random() * Math.floor(number))    
    return randomInteger
}

// Store the output of the selectRandomNumber function to be used to select an index in the wordsToGuess array
var randomIndex = selectRandomNumber(lengthOfList);

// Using the randomIndex variable, select a word out of the wordsToGuess array. 
var selectedWord = wordsToGuess[randomIndex]

// Store the length of the selected word to create dashes on the screen
var lengthOfSelectedWord = selectedWord.length

for(i=0; i < lengthOfSelectedWord; i++){
    //create a variable that stores a span element
    var spanElement = document.createElement('span')
    spanElement.id = 'span' + i; //add the element id span + number
    spanElement.innerText = '_ '; //set the inner text of the span element to an underscore

    var wordArea = document.getElementById('dashes');
    wordArea.appendChild(spanElement);
}

/*var numberOfDashes = '_ '.repeat(lengthOfSelectedWord)
document.getElementById("dashes").innerHTML = numberOfDashes
document.getElementById("dashes").innerHTML = arrayName[0] + arrayName[1]*/
// Using lengthOfSelectedWord, select in order the index location and change the dash with the selected letter of the user.

// As the user provides a letter, search if that letter exists in the string, and see if we can replace the letter
// Change the selected word from the array (returns a string) to an array of the letters. (i.e. "test" = ["t", "e", "s", "t"])




//'<span id="letter" + i + '"> _ </span>"
// <span id="letter">  number here </span>
// in javascript change the value between a <span></span> tag/element based on the letter pressed