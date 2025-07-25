var stars = document.querySelectorAll("#stars img");
var fixedIndex = -1;

stars.forEach((star, index) => {
  star.addEventListener("mouseenter", () => {
    if (fixedIndex === -1) fillStars(index);
  });

  star.addEventListener("mouseout", () => {
    if (fixedIndex === -1) clearStars(index);
    else fillStars(fixedIndex);
  });

  star.addEventListener("click", () => {
    if (fixedIndex === index) {
      fixedIndex = -1;
      clearStars();
    } else {
      fixedIndex = index;
      fillStars(index);
    }
  });
});

function fillStars(limit) {
  stars.forEach((a, b) => {
    a.setAttribute(
      "src",
      b <= limit ? "images/filled_star.png" : "images/empty_star.png"
    );
  });
}

function clearStars() {
  stars.forEach((s) => {
    s.setAttribute("src", "images/empty_star.png");
  });
}
