document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  });
  
  console.log(document.head)
  console.log(document.body)
document.body.style.backgroundColor
console.log(document.getElementById("back-to-top"))