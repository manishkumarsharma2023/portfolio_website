const hamburgerMenu = document.querySelector(".hamburger_menu");
const secondaryNavigation = document.querySelector(".secondary_navigation");

hamburgerMenu.addEventListener("click", () => {
    secondaryNavigation.classList.toggle("Visibility");
});