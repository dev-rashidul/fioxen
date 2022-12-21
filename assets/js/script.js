// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".primary-menu-wrapper");
    header.classList.toggle("sticky", window.scrollY > 100)

})

// JavaScript for Mobile Menu

const navBtn = document.querySelector(".navbar-toggler");
const closeBtn = document.querySelector(".navbar-close");
const menu = document.querySelector(".main-menu");

navBtn.addEventListener("click", function(){
    this.classList.toggle("active")
    menu.classList.toggle("active")
})

closeBtn.addEventListener("click", function(){
    menu.classList.remove("active")
    navBtn.classList.remove("active")
})