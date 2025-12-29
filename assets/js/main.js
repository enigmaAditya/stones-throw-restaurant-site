// Main JS
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");

  if (footer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(html => {
        footer.innerHTML = html;

        const year = footer.querySelector("#year");
        if (year) {
          year.textContent = new Date().getFullYear();
        }
      })
      .catch(err => {
        console.error("Footer failed to load:", err);
      });
  }
});
