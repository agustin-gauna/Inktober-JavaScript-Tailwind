const toggleMenu = document.querySelector(".toggle-menu")
const menuIcon = document.getElementById("menuIcon")
const dropdownMenu = document.querySelector(".dropdown-menu")



toggleMenu.addEventListener("click", () => {
    dropdownMenu.classList.toggle('top-48')

    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    menuIcon.classList.toggle('rotate-180')
})