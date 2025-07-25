//Task 1
document.getElementById("keyCode").addEventListener("keypress", (e) => {
  alert(e.key + ":" + e.keyCode);
});
document.getElementById("keyCode").addEventListener("mousedown", (e) => {
  var mouseCode = e.button;
  var mouseBtns = ["Left Click", "Middle Click", "Right Click"];
  var mouseBtn = mouseBtns[mouseCode];
  console.log(mouseBtn);
  if (mouseCode === 0) {
    mouseBtn = "Lef Click";
  } else if (mouseCode === 1) {
    mouseBtn = "Middle Click";
  } else if (mouseCode === 2) {
    mouseBtn = "Right Click";
  }
  console.log(mouseBtn);
  //   alert(mouseBtn + ":" + mouseCode);
});

//Task 2
var clockInterval;
document.getElementById("startClock").addEventListener("click", () => {
  alert("clock Started");
  clockInterval = setInterval(() => {
    var time = new Date().toLocaleTimeString();
    document.getElementById("liveClock").innerHTML = time;
  }, 1000);
});

document.body.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "w") {
    clearInterval(clockInterval);
    alert("Clock Stopped");
  }
});
