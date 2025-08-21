  // Toggle menu
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});


const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
});
