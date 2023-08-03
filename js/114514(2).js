var numberSequence = "";

document.addEventListener("keydown", function(event) {
  // get user's input
  var key = event.key;
    
  // if the input is a number, then insert the number in the number sequence
  if (/^\d$/.test(key)) {
    numberSequence += key;
  }

  // regular expression
  const valid = /114514/g
    
  // if the input is including 114514
  if (valid.test(numberSequence)) {
    window.location.href="../special.html";
    // reset the number sequence
    numberSequence = "";
  }
});