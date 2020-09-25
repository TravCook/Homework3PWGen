// Assignment Code
var generateBtn = document.querySelector("#generate");

// This array contains every possible choice for a password character
//0-25 is lowercase characters
//26-51 is for the uppercase characters
//52-61 is the numbers
//62-68 is special characters
var pwCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "&", "?"]
var lcAmount = 0;
var ucAmount = 0;
var numAmount = 0;
var spAmount = 0;

var charChoice = 0;
var selectedChar;

//Generates the password upon loading the page using prompts. Stores the output in an array  
function generatePassword(){
  var emptyPass = [];
  var lcInput = confirm("Would you like to use lowercase letters?");
  if (lcInput){
    lcAmount = prompt("How many lowercase letters?")
    for (i=0; i<lcAmount; i++){
      charChoice = Math.floor(Math.random() * 26)
      selectedChar = pwCharacters[charChoice];
      emptyPass.push(selectedChar);
    }
  }
  var ucInput = confirm("Would you like to use capital letters?");
  if (ucInput){
    ucAmount = prompt("How many capital letters?")
    for (i=0; i<ucAmount; i++){
      charChoice = Math.floor(Math.random() * 25) +26
      selectedChar = pwCharacters[charChoice];
      emptyPass.unshift(selectedChar);
    }
  }
  var numInput = confirm("Would you like to use numbers?");
  if (numInput){
    numAmount = prompt("How many numbers?")
    for (i=0; i<numAmount; i++){
      charChoice = Math.floor(Math.random() * 10) +52
      selectedChar = pwCharacters[charChoice];
      emptyPass.unshift(selectedChar);
    }
  }
  var spInput = confirm("Would you like to use special characters?");
  if (spInput){
    spAmount = prompt("How many special characters?")
    for (i=0; i<spAmount; i++){
      charChoice = Math.floor(Math.random() * 7) +62
      selectedChar = pwCharacters[charChoice];
      emptyPass.push(selectedChar);
  }
}

if (emptyPass.length < 8){
  alert("Error! Not enough characters chosen!")
}else if(emptyPass.length > 128){
  alert("Error! too many characters chosen!")
}

//Full password is now stored in emptyPass

var finalPass = emptyPass.join('');
return finalPass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
