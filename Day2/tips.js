// // //Task 1
// var tips = [
//   "Use `let` and `const` instead of `var` to avoid hoisting issues.",
//   "Master arrow functions for concise syntax and better `this` handling.",
//   "Understand closures to leverage scope and create private variables.",
//   "Use template literals (`backticks`) for easier string interpolation.",
//   "Avoid mutating objects and arrays; use the spread operator (`...`) for immutability.",
//   "Set default parameters in functions to prevent `undefined` errors.",
//   "Leverage `async` and `await` to simplify asynchronous code.",
//   "Learn the behavior of `this` in different contexts to avoid confusion.",
//   "Use strict equality (`===`) to avoid type coercion bugs.",
//   "Utilize browser developer tools for debugging and performance optimization.",
// ];

// var random = Math.floor(Math.random() * 10);
// document.getElementById("tip").innerHTML = tips[random];

// // // Task 2
// document.getElementById("date").addEventListener("click", getTime);

// function getTime() {
//   var date = new Date();
//   document.getElementById("time").innerHTML = date.toLocaleString();
// }

// // //Task 3
// var email = prompt("Enter your email");
// if (email.includes("@") && !email.startsWith("@") && !email.endsWith("@")) {
//   alert("sucess");
// } else {
//   alert("your email is wrong");
//   prompt("Enter your email");
// }

// // //Task 4
// var nameRegex = /^[A-Z][a-z]{3,}\s[A-z][a-z]{3,}$/;
// var emailRegex = /^[^@].+[@].+[.eg]$/;

// var isNameValid = false;

// while (!isNameValid) {
//   var userName = window.prompt("Enter your full name...");
//   if (nameRegex.test(userName)) {
//     isNameValid = true;
//   }
// }

// var isEmailValid = false;

// while (!isEmailValid) {
//   var userEmail = window.prompt("Enter your email...");
//   if (emailRegex.test(userEmail)) {
//     isEmailValid = true;
//   }
// }

// // //Task 6
// var studetGrades = [60, 100, 10, 15, 85];
// studetGrades.sort((a, b) => b - a);
// console.log(studetGrades);

// var highestStudent = studetGrades.find((grade) => grade <= 100);
// console.log(highestStudent);

// var lowestStudent = studetGrades.filter((grade) => grade < 60);
// console.log(lowestStudent);

// // //Task 7
// var studentArrayGrades = [
//   { name: "Alaa", grade: 60 },
//   { name: "Hassan", grade: 100 },
//   { name: "Yousef", grade: 10 },
//   { name: "Sama", grade: 15 },
//   { name: "Medhat", grade: 85 },
// ];

// var student1 = studentArrayGrades.find(
//   (student) => student.grade >= 90 && student.grade <= 100
// ).name;
// console.log(student1);
// console.log("...");

// var student2 = studentArrayGrades.filter((student) => student.grade < 60);
// console.log(student2);
// console.log("...");

// var student3 = studentArrayGrades.push({ name: "Mohamed", grade: 65 });
// for (var studentIndex in studentArrayGrades) {
//   console.log(studentArrayGrades[studentIndex]);
// }
// console.log("...");

// studentArrayGrades.pop();
// for (var element of studentArrayGrades) {
//   console.log(element);
// }
// console.log("...");

// studentArrayGrades.sort((a, b) => a.name.localeCompare(b.name));
// console.log(studentArrayGrades);

// studentArrayGrades.splice(
//   2,
//   0,
//   { name: "Ahmed", grade: 60 },
//   { name: "Ali", grade: 75 }
// );
// console.log(studentArrayGrades);
// console.log("...");

// studentArrayGrades.splice(3, 1);c
// console.log(studentArrayGrades);
// console.log("...");

// //Task 8
try {
  document.getElementById("btndate").addEventListener("click", showDate);
} catch (error) {
  alert("Error");
  console.log(error);
}
function showDate() {
  var userDate = window.prompt("Enter Your Birthday...");
  var day = Number(userDate.slice(0, 2));
  var month = Number(userDate.slice(3, 5));
  var year = Number(userDate.slice(6));
  debugger;
  if (validaDate(userDate)) {
    var date = new Date(year, month - 1, day);
    console.log(date);
    document.getElementById("btndate").innerHTML = date.toLocaleDateString();
  } else {
    alert("Wrong Date Format");
  }
}

function validaDate(date) {
  debugger;
  if (
    date.length !== 10 ||
    date.at(2) !== "-" ||
    date.at(5) !== "-" ||
    isNaN(Number(date.slice(0, 2))) ||
    isNaN(Number(date.slice(3, 5))) ||
    isNaN(Number(date.slice(6))) ||
    Number(date.slice(0, 2)) > 31 ||
    Number(date.slice(3, 5)) > 12
  ) {
    return false;
  }
  return true;
}

//Bouns Task 1
// document.getElementById("btnday").addEventListener("click", getDay);

// function getDay() {
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var userDateDay = prompt("Enter the date to know the date");
//   if (validaDate(userDateDay)) {
//     var day = Number(userDate.slice(0, 2));
//     var month = Number(userDate.slice(3, 5));
//     var year = Number(userDate.slice(6));
//     var dateObj = new Date(year, month - 1, day);
//     var dateDay = dateObj.getDay();
//     var dateName = days[dateDay];
//     document.getElementById("showday").innerHTML = dateName;
//   } else {
//     alert("Wrong Date Format");
//   }
// }
