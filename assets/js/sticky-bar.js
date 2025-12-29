// Sticky Bar JS
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sticky-cta");

  if (!container) return;

  fetch("components/sticky-cta.html")
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      console.error("Sticky CTA failed to load:", err);
    });
});
