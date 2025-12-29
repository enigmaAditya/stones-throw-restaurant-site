document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-map");
  const map = document.getElementById("map-container");

  if (!btn || !map) return;

  btn.addEventListener("click", () => {
    map.classList.toggle("hidden");
    btn.textContent = map.classList.contains("hidden")
      ? "Show Map"
      : "Hide Map";
  });
});
