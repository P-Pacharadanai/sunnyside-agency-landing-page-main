const btn = document.getElementById("hamburger-menu");
const popupMenu = document.getElementById("popup-menu");

const showPopupMenu = () => {
  popupMenu.classList.toggle("hidden");
  popupMenu.classList.toggle("flex");
};

btn.addEventListener("click", showPopupMenu);
