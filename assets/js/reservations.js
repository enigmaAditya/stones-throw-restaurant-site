document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-booking");
  const container = document.getElementById("booking-container");

  if (!btn || !container) return;

  btn.addEventListener("click", () => {
    container.classList.toggle("hidden");
  });
});
