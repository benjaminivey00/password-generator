
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generator functions

let abclower =  function getRandomLower() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() *lowerCase.length)];
  
}

let abcupper =  function getRandomUpper() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperCase[Math.floor(Math.random() *upperCase.length)];
    }
  
  
  let number = function getRandomNumber() {
    const number = "1234567890"
      return number[Math.floor(Math.random() * number.length)] ;
      }
  
  let symbol = function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}+=<>/'
       return symbols[Math.floor(Math.random() * symbols.length)];
        }
        console.log(number());
// user inputs
 let passLength = prompt("Pick a password length between 8-128")
        if(passLength <8 || passLength > 128){
          alert("pick a differtent length")
        }
      else {
        if (confirm("Do you want upper case letters in your password")){
  
}
      }