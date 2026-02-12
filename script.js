
// AI assisted: javascript heart function 

document.querySelectorAll(".wishlist").forEach(heart => {
  heart.addEventListener("click", () => {
    heart.textContent = heart.textContent === "♡" ? "❤️" : "♡";
  });
});

// end AI assisted section 