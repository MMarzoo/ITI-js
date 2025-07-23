//Task 8
var isNameCorrect = false;

while (!isNameCorrect) {
  var userName = window.prompt("Enter your name");
  var hasName = /\d/.test(userName);
  if (!hasName && userName.trim() !== "") {
    isNameCorrect = true;
    document.getElementById("name").innerHTML = "Name: " + userName;
  }
}

var isyearCorrect = false;

while (!isyearCorrect) {
  var birthday = window.prompt("Enter your birth year");
  var numYear = Number(birthday);
  if (!isNaN(numYear) && numYear < 2010) {
    isyearCorrect = true;
    document.getElementById("brd").innerHTML = "Birth year: " + numYear;
    var currentYear = new Date().getFullYear();
    var userAge = currentYear - numYear;
    document.getElementById("age").innerHTML = "Age: " + userAge;
  }
}
