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
    spanElement.id = 'span' + i; //add the element id span + a number
    spanElement.className = selectedWord[i].toLowerCase() //name the span class after the letter in the selected word string
    spanElement.innerText = '_ '; //set the inner text of the span element to an underscore followed by a space

    var wordArea = document.getElementById('dashes'); //store the DOM object with an id 'dashes'
    wordArea.appendChild(spanElement); //append the dashes to that area in the HTML code 

    document.onkeyup = function(event) {
        var keyPress = event.key;
        document.getElementById('selectedLetter').innerHTML = keyPress;
        var keyClass = document.getElementsByClassName(keyPress);
        // if the letter exists as any class name, it will create an array (formally
        // known as a "collection" so an if statement testing to see if the collection
        // is greater than one will capture whether the letter is part of the selected word)
        if(keyClass.length > 0){
            for(i=0; i < keyClass.length; i++){
                keyClass[i].innerText = keyPress
            }
        }
        else {
            var incorrect = document.getElementById('incorrect')
            var incorrectNumber = Number(incorrect.innerText)
            if(incorrectNumber < 10){
                incorrect.innerText = incorrectNumber + 1
            }
            else{
                incorrect.innerText = 'GAME OVER'
                alert("GAME OVER!")
            }
        }
        
        }
    }


//'<span id="letter" + i + '"> _ </span>"
// <span id="letter">  number here </span>
// in javascript change the value between a <span></span> tag/element based on the letter pressed