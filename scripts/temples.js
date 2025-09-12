// temples.js

// --------------------
// Footer: year and last modified
// --------------------
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// --------------------
// Hamburger menu functionality
// --------------------
const hamButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// Function to check window width and hide/show hamburger button
function checkMenu() {
  if (window.innerWidth <= 600) {
    hamButton.style.display = "block";   // show hamburger
    navMenu.style.display = "none";      // hide menu by default
    hamButton.textContent = "☰";         // hamburger icon
  } else {
    hamButton.style.display = "none";    // hide hamburger
    navMenu.style.display = "flex";      // show menu normally
  }
}

// Initial check
checkMenu();

// Update on window resize
window.addEventListener("resize", checkMenu);

// Toggle menu on click
hamButton.addEventListener("click", () => {
  if (navMenu.style.display === "none" || navMenu.style.display === "") {
    navMenu.style.display = "block";   // show menu
    hamButton.textContent = "✖";       // change to X
  } else {
    navMenu.style.display = "none";    // hide menu
    hamButton.textContent = "☰";       // back to hamburger
  }
});
