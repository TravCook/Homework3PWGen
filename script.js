// Assignment Code
var generateBtn = document.querySelector("#generate");

// This array contains every possible choice for a password character
//0-25 is lowercase characters
//26-51 is for the uppercase characters
//52-61 is the numbers
//62-68 is special characters
var pwCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "&", "?"]


//Ask the user if they want to use any of the specific character types
  //do you want to use lowercase characters?
    //if yes, ask user to specify how many
      //how many lowercase characters? (store this for later)
    //if no, move on to next question
  //do you want to use uppercase characters?
    //if yes ask user to specify how many
      //how many uppercase characters? (store this for later)
    //if no move on to the next question
  //do you want to use numbers?
    //if yes ask user to specify how many
      //how many number characters? (store this for later)
    //if no move on to the next question
  //do you want to use special characters?
    //if yes ask user to specify how many
      //how many special characters? (store this for later)
    //if no move on to the next question

    //Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
    //Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10



  //when a user specifies an input and an amount, run for loop for i where i <= their input and the loop picks one of the previously specified characters with the Mathrandom function
  //then store the selected random character into an array (var finalPass = [,])
  //then all you gotta do is figure out how to print the array lol (var passString = finalpass.toString())
  //just send passString over to the html box after pw is fully generated 
















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
