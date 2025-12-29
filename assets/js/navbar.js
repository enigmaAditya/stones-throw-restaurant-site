// Navbar JS
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");

  if (!header) return;

  // Inject navbar
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(html => {
      header.innerHTML = html;

      const toggle = header.querySelector(".navbar-toggle");
      const menu = header.querySelector(".navbar-menu");

      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    })
    .catch(err => {
      console.error("Navbar failed to load:", err);
    });
});
