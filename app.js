const toggleBtn = document.querySelector(".toggle-menu");
const nav = document.querySelector(".navbar");
const bg = document.querySelector(".bg-img");

toggleBtn.addEventListener("click", ()=>{
    nav.classList.toggle("open-nav");
    toggleBtn.classList.toggle("close-nav");
    bg.classList.toggle("open-nav");
})