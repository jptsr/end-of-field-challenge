const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
console.log(hamburger)

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))