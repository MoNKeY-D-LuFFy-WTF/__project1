const burger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const caretDown = document.querySelector(".fa-caret-down");
const headerListHome = document.querySelector(".header__list-home");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerNav.classList.toggle("active");
    body.classList.toggle("active");
})
caretDown.addEventListener("click", () => {
    caretDown.classList.toggle("caret");
    headerListHome.classList.toggle("caret");
})