document.onkeyup = function(event) {
    console.log(event.key);
}

// Create a array of words to be used in Hangman game
var wordsToGuess = ["Dolphins", "Hurricanes", "Marlins", "Panthers", "Heat"];
// Create a variable to store the length of the array to be used in the selectRandomNumber function
var lengthOfList = wordsToGuess.length;

// Create a function to select a random number between 0 and 4
function selectRandomNumber(number){
    // Math.random() will return a float number between 0 and 1
    var randomInteger = Math.floor(Math.random() * Math.floor(number))
    
    return randomInteger
}

// Store the output of the selectRandomNumber function to be used to select an index in the wordsToGuess array
var randomIndex = selectRandomNumber(lengthOfList);
console.log(wordsToGuess[randomIndex])
