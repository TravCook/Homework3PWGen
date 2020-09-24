// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwOptions = {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getUserPrefs(){
  pwOptions.useCapitals = confirm("Use capitals in password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
