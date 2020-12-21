
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
  var password = thePw();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Question function, asks which type of characters are needed for PW
var questions= function(){
  window.alert("Welcome to the Password Generator!");
  
    var upperConfirm = window.confirm("Do you wish to use Uppercase?");
      if (upperConfirm){
        upperConfirm = charSet.upper
      }else {
        upperConfirm = "";
      };
    var lowerConfirm = window.confirm("Do you wish to use Lowercase?");
      if (lowerConfirm){
        lowerConfirm = charSet.lower
      }else {
        lowerConfirm = "";
      };
    var numbersConfirm = window.confirm("Do you wish to use Numbers?");
      if (numbersConfirm){
        numbersConfirm = charSet.numbers
      }else {
        numbersConfirm = "";
      };
    var specialConfirm = window.confirm("Do you wish to use Special Chars");
      if (specialConfirm){
        specialConfirm = charSet.special
      }else {
        specialConfirm = "";
      };
// Combines the charcters that are requested, Which works!
  var thePw = [(upperConfirm + lowerConfirm + numbersConfirm + specialConfirm)]; {
    console.log(thePw);
  } 
  // My attempt and trying to get the results into something i can work with or randomize
  arryPw = (thePw); {
  for (var i = 0; i < thePw.length; i++); 
  }
  var truePw = arryPw[i];{
    console.log(truePw);
  }
};
// NEED to figuer out how long Password should be via question,
// And  where to insert it in my "for loop" which im having trouble with

// Starts the Program
questions();
