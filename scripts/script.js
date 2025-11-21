const menuBtn = document.querySelector(".navbtn");
const deNav = document.querySelector(".menusmallscreen");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    deNav.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open");
}