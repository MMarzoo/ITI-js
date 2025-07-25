//Task 5
var fname = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var avatar = document.querySelector("#avatar");
var input = document.querySelector("#userid");
var button = document.querySelector("#submitid");
var dropdownList = document.querySelector("#users");
var http = new XMLHttpRequest();
var user;
var userId;

button.addEventListener("click", () => {
  userId = input.value;
  if (userId === "") {
    return;
  }
  http.open("GET", `https://reqres.in/api/users/${userId}`);
  http.setRequestHeader("x-api-key", "reqres-free-v1");
  http.send();

  http.addEventListener("readystatechange", () => {
    if (http.readyState === 4 && http.status === 200) {
      user = JSON.parse(http.response).data;

      fname.innerHTML = "First_Name: " + user.first_name;
      lname.innerHTML = "Last_Name: " + user.last_name;
      avatar.setAttribute("src", user.avatar);
    }
  });
});

//Task 5 b && c

for (var i = 1; i <= 12; i++) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://reqres.in/api/users/${i}`);
  request.setRequestHeader("x-api-key", "reqres-free-v1");
  request.send();

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var user = JSON.parse(request.responseText).data;

      var option = document.createElement("option");
      option.value = user.id;
      option.textContent = `${user.first_name} ${user.last_name}`;
      dropdownList.appendChild(option);
    }
  };
}

dropdownList.addEventListener("change", function () {
  userId = this.value;
  if (!userId) return;

  http.open("GET", `https://reqres.in/api/users/${userId}`);
  http.setRequestHeader("x-api-key", "reqres-free-v1");
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      var user = JSON.parse(http.responseText).data;
      fname.innerHTML = "First_Name: " + user.first_name;
      lname.innerHTML = "Last_Name: " + user.last_name;
      avatar.setAttribute("src", user.avatar);
    }
  };
});
