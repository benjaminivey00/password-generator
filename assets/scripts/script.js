let symbols = [
    '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
  ];
  let lowerCase = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
let upperCase = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'
  ];
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  function getPasswordOption(){
      let passLength = parseInt(prompt("Pick a password length between 8-128"));
      if(isNaN(passLength) === true){
          alert("you must enter a number")
      }
      if(passLength <8 || passLength > 128){
        alert("Password length must be between 8-128, pick a differtent length")
      }
      let confLower = confirm("Press ok if you want lowercase letters");
      let confUpper = confirm("Press ok if you want uppercase letters");
      let confNumber = confirm("Press ok if you want numbers");
      let confSymbol = confirm("Press ok if you want symbols");
      if(confLower === false && confUpper === false && confNumber === false && confSymbol === false){
          alert("select atleast one set of character type")
      }

      let passwordOption = {
        passLength:passLength,
        confLower:confLower,
        confUpper:confUpper,
        confNumber:confNumber,
        confSymbol:confSymbol,
      }
   return passwordOption;
    }

    function getRandom(arr){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomEl = arr[randomIndex];
        return randomEl;
    }
  
 function genPassword (){
let options = getPasswordOption();
let result = [];
let possibleChars = [];
let guaranteedChars = [];

if(options.confLower){
    possibleChars = possibleChars.concat(lowerCase)
    guaranteedChars.push(getRandom(lowerCase))
}

if(options.confUpper){
    possibleChars = possibleChars.concat(upperCase)
    guaranteedChars.push(getRandom(upperCase))
}

if(options.confNumber){
    possibleChars = possibleChars.concat(numbers)
    guaranteedChars.push(getRandom(numbers))
}

if(options.confSymbol){
    possibleChars = possibleChars.concat(symbols)
    guaranteedChars.push(getRandom(symbols))
}

for (var i=0; i < options.passLength; i++){
    var possibleChar = getRandom(possibleChars)
    result.push(possibleChar)
}
for (var i=0; i < guaranteedChars.length; i++){
    result[i] = guaranteedChars[i]
    
}
return result.join('')
 }
 var generateBtn = document.querySelector("#generate");
 function writePassword() {
    var password = genPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  generateBtn.addEventListener("click", writePassword);