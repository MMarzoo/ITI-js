//Task 6

var img = document.querySelectorAll("img");

img.forEach((img) => {
  img.style.transition = "opacity 0.5s ease";

  img.addEventListener("mouseenter", () => {
    img.style.opacity = "0.3";
  });

  img.addEventListener("mouseout", () => {
    img.style.opacity = "1";
  });
});
