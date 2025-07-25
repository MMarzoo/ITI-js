//Task 1

var loginBtn = document.querySelector("button");
var userName = document.querySelector("#username");
var password = document.querySelector("#password");
var rememberBtn = document.querySelector("#remember");

if (localStorage.userName === "" || localStorage.userName !== undefined) {
  userName.value = localStorage.getItem("username");
}

if (localStorage.password === "" || localStorage.password !== undefined) {
  password.value = localStorage.getItem("password");
}
loginBtn.addEventListener("click", () => {
  localStorage.setItem("username", userName.value);
  localStorage.setItem("password", password.value);
});

// Task 1 a

if (sessionStorage.userName === "" || sessionStorage.userName !== undefined) {
  userName.value = sessionStorage.getItem("username");
}

if (sessionStorage.password === "" || sessionStorage.password !== undefined) {
  password.value = sessionStorage.getItem("password");
}
loginBtn.addEventListener("click", () => {
  sessionStorage.setItem("username", userName.value);
  sessionStorage.setItem("password", password.value);
});

// yes i can use session storage as long as i work in the same page

// Task 2
loginBtn.addEventListener("click", () => {
  if (rememberBtn.checked) {
    localStorage.setItem("username", userName.value);
    localStorage.setItem("password", password.value);
  } else {
    if (
      localStorage.hasOwnProperty("username") &&
      localStorage.hasOwnProperty("password")
    ) {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  }
});

//Task 3
var student1 = {
  id: 1,
  name: "Mohamed",
  age: "25",
  address: "Beni suef",
  skills: ["teamwork", "research", "football", "leadership"],
  isLeader: true,
};
console.log(JSON.stringify(student1));

//Task 4
var student2 = {
  id: 2,
  name: "Ahmed",
  age: "23",
  address: "Cario",
  skills: ["research", "leadership", "photography", "yoga"],
  isLeader: false,
};

var student3 = {
  id: 3,
  name: "Ali",
  age: "20",
  address: "Alexandria",
  skills: ["problem-solving", "typing-speed", "sportsmanship", "chess"],
  isLeader: false,
};

var arrStudents = [student1, student2, student3];
console.log(JSON.stringify(arrStudents));
