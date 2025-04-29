const navBtn = document.querySelector(".nav-menu-btn")
const navMenu = document.querySelector(".nav-menu-mobile")

let navOpen = false;
navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("nav-menu-btn--open")
        navMenu.classList.remove("nav-menu-mobile--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav-menu-btn--open")
        navMenu.classList.add("nav-menu-mobile--open")
        navOpen = true
    }
})
