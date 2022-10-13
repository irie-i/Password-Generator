// Assignment Code
var generateBtn = document.querySelector("#generate");


//Assigned arrays
const lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charList = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "^", "_"];
const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwOptions = [];

  //Password Length   
  var passLength = window.prompt("Password Length (8 -128 characters)");
  console.log("Passweord Length: " + passLength);
  if (passLength >= 8 && passLength <= 128) {
    window.alert("Your number is between 8 and 128! " + "You chose: " + passLength);
  }

  else {
    window.alert("Please choose a number between 8-128");
    return;
  }
  //Uppercase
  var uCase = window.confirm("Include uppercase?");
  console.log("Uppercase: " + uCase)
  //Lowercase
  var lCase = window.confirm("Include lowercase?");
  console.log("Lowercase: " + lCase);

  //Numbers selection
  var numChoice = window.confirm("Include numbers?");
  console.log("Numbers Included " + numChoice);
  //Special Characters
  var specChar = window.confirm("Include special characters?");
  console.log("Special Characters: " + specChar);

  // Concatination of selections with arrays
  if (uCase) {
    pwOptions = pwOptions.concat(upperList);
  }
  if (lCase) {
    pwOptions = pwOptions.concat(lowerList);
  }
  if (numChoice) {
    pwOptions = pwOptions.concat(numberList);
  }
  if (specChar) {
    pwOptions = pwOptions.concat(charList);
  }

  var randomPw = "";
  for (var i = 0; i <= passLength; i++) {
   randomPw = randomPw + pwOptions[Math.floor(Math.random() * pwOptions.length)];
    console.log(randomPw)

  }
  
  return randomPw;

 
}





// }


  //





// }
