//Task 1 c
var fullName = document.querySelector(".fullname");

fullName.addEventListener("focus", () => {
  fullName.style.border = "solid 1px blue";
});

fullName.addEventListener("blur", () => {
  fullName.style.border = "none";
});

// Task 1 d
var nameValid = document.querySelector("#namevalid");

fullName.addEventListener("blur", () => {
  nameValid.innerHTML = "";
  if (fullName.value == "" || fullName.value.length < 3) {
    nameValid.textContent = "Invalid Name";
    fullName.focus();
    fullName.select();
  } else {
    nameValid.innerHTML = `<img src="images/valid.png" alt="valid" class="validImg" height="10px" width="10px">`;
    fullName.style.border = "solid 1px blue";
  }
});

//Task 1 e
var passwords = document.querySelectorAll(".password");
var pwdInvalid = document.querySelector("#pwdinvalid");

passwords[1].addEventListener("blur", () => {
  pwdInvalid.innerHTML = "";
  if (
    passwords[0].value === "" ||
    passwords[1].value === "" ||
    passwords[0].value !== passwords[1].value
  ) {
    pwdInvalid.innerHTML = "Passwords should be the same";
  } else {
    pwdInvalid.innerHTML = `<img src="images/valid.png" alt="valid" class="validImg" height="10px" width="10px">`;
  }
});

//Task 1 f
var allInput = document.querySelectorAll("input");
allInput.forEach((element) => {
  element.addEventListener("blur", () => {
    element.style.backgroundColor = "white";
    if (element.value === "") {
      element.style.backgroundColor = "gray";
    }
  });
});

//Task 2
var form = document.querySelector("form");
var formInvalid = document.querySelector("#forminvalid");
form.addEventListener("submit", (event) => {
  if (
    fullName.value === "" ||
    fullName.value.length < 3 ||
    passwords[0].value === "" ||
    passwords[1].value === "" ||
    passwords[0].value !== passwords[1].value
  ) {
    event.preventDefault();
    formInvalid.innerHTML = "Plz correct the validation errors first";
  } else {
    // form.submit();
  }
});
