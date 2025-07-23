// Task 1
// window.alert("welcome to my site");
// var userName = window.prompt("What's your name?");
// if (userName === "") {
//   var userName = "user";
// }
// document.getElementById("greet").innerHTML = "welcome " + userName;

// Task 2
function sum(x, y) {
  return Number(x) + Number(y);
}
document.getElementById("sum").addEventListener("click", consloeSum);
function consloeSum() {
  var x = window.prompt("enter first number");
  var y = window.prompt("enter second number");
  console.log(sum(x, y));
}

//Task 3

// function tempDay() {
//   //   var weather = window.prompt("what's the current temp?");
//   return weather >= 30 ? "Hot" : "Cold";
// }
// console.log(tempDay(25));

//Task 4
function tempDay(temp, feel) {
  if (temp >= 25 && temp <= 30 && feel >= 25 && feel <= 30) {
    return "Normal";
  } else if (temp < 25 && feel < 25) {
    return "Cold";
  } else if (temp > 30 && feel > 30) {
    return "Hot";
  } else {
    return "Ambiguous, can't detect";
  }
}

console.log(tempDay(18, 18));

//Task 5
function track(studentFaculty) {
  switch (studentFaculty) {
    case "FCI":
      return "You're eligible to Programing tracks";
      break;
    case "Engineering":
      return "You're eligible to Network and Embedded tracks";
      break;
    case "Commerce":
      return "You're eligible to ERP and Social media tracks";
      break;
    default:
      return "You're eligible to SW fundamentals track ";
  }
}
console.log(track("FCI"));
console.log(track("Engineering"));
console.log(track("Commerce"));
console.log(track("Physics"));

// Task 6
function oddNumber(start, end) {
  if (start % 2 === 0) {
    start++;
  }
  for (var i = start; i <= end; i += 2) {
    console.log(i);
  }
}
oddNumber(9, 23);

//Task 7
document.getElementById("expression").addEventListener("click", () => {
  var mathex = window.prompt("enter he math expression");
  console.log(mathex);
});
