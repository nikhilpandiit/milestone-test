const plusButton = document.getElementById("plus-icon");
const imageContainer = document.querySelector(".hero");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

let isVisible = false;

plusButton.addEventListener("click", () => {
  isVisible = !isVisible;
  imageContainer.style.display = isVisible ? "block" : "none";
});

menuIcon.onClick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
