// Task 4
var userName = location.search.split("&")[0].split("=")[1];
if (!userName) userName = "User";
var greetUser = document.getElementById("greet");
greetUser.innerHTML = "Welcome " + userName;
greetUser.style.fontSize = "50px";
greetUser.style.fontWeight = "bold";

//Task 5
var newAd;
function openAD() {
  setTimeout(() => {
    newAd = open(
      "ad.html",
      "_blank",
      "width=400, height=400,screenX=200,screenY=200"
    );
  }, 3000);
}
document.getElementById("ad").addEventListener("click", openAD);

function closeAd() {
  newAd.close();
}
document.getElementById("closeAd").addEventListener("click", closeAd);
