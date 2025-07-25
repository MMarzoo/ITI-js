// Task 3
let clickCounters = {
  image1: 0,
  image2: 0,
  image3: 0,
};

function handleImageClick(event) {
  var imageId = event.target.id;
  clickCounters[imageId]++;
}

document.getElementById("image1").addEventListener("click", handleImageClick);
document.getElementById("image2").addEventListener("click", handleImageClick);
document.getElementById("image3").addEventListener("click", handleImageClick);

document.getElementById("image1").addEventListener("click", () => {
  document.getElementById("counter1").innerHTML =
    "counter 1: " + clickCounters.image1;
});
document.getElementById("image2").addEventListener("click", () => {
  document.getElementById("counter2").innerHTML =
    "counter 2: " + clickCounters.image2;
});
document.getElementById("image3").addEventListener("click", () => {
  document.getElementById("counter3").innerHTML =
    "counter 3: " + clickCounters.image3;
});

setTimeout(() => {
  document
    .getElementById("image1")
    .removeEventListener("click", handleImageClick);
  document
    .getElementById("image2")
    .removeEventListener("click", handleImageClick);
  document
    .getElementById("image3")
    .removeEventListener("click", handleImageClick);

  document.getElementById("image1").addEventListener("click", () => {
    alert("Game Over");
  });
  document.getElementById("image2").addEventListener("click", () => {
    alert("Game Over");
  });
  document.getElementById("image3").addEventListener("click", () => {
    alert("Game Over");
  });
}, 3000);
