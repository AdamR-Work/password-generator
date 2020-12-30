
// Assignments
var generateBtn = document.querySelector("#generate");
var truePw;
var arryPw;
var thePw;
var charSet= {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#&()–[{}]:;',?/*~$^+=<>"
};

// Write password to the #password input
function writePassword() {
  var password = questions();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Question function, asks which type of characters are needed for PassWord
var questions= function(){
  alert("Welcome to the Password Generator!");
    var charBank = "";
    var upperConfirm = confirm("Do you wish to use Uppercase?");
      if (upperConfirm){
        charBank += charSet.upper
      };
    var lowerConfirm = confirm("Do you wish to use Lowercase?");
      if (lowerConfirm){
        charBank += charSet.lower
      };
    var numbersConfirm = confirm("Do you wish to use Numbers?");
      if (numbersConfirm){
        charBank += charSet.numbers
      };
    var specialConfirm = confirm("Do you wish to use Special Chars");
      if (specialConfirm){
        charBank += charSet.special;
      };
    
    var lengthPrompt = prompt("How many characters long would you like your password to be? (Between 8-128)");
      while(lengthPrompt <= 7 || lengthPrompt >=129){
        alert("Incorrect number value.");
        lengthPrompt = prompt("Can only be a number between 8-128.")
        }

    truePw = "";
    arryPw = "";
// My Randomizer for the password choices
    for(i=0; i<lengthPrompt; i++){
      arryPw = charBank[Math.floor(Math.random()*charBank.length)]
      truePw += arryPw;
    }
    return truePw;
};
