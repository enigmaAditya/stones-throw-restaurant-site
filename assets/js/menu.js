document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("menu-tabs");
  const itemsContainer = document.getElementById("menu-items");

  if (!tabsContainer || !itemsContainer) return;

  fetch("data/menu.json")
    .then(res => res.json())
    .then(data => {
      buildTabs(data.categories);

      const hash = window.location.hash.replace("#", "");
      const initialCategory =
        data.categories.find(cat => cat.id === hash) ||
        data.categories[0];

      renderCategory(initialCategory);
      activateTab(initialCategory.id);
    });

  function buildTabs(categories) {
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat.title;
      btn.dataset.id = cat.id;

      btn.addEventListener("click", () => {
        renderCategory(cat);
        activateTab(cat.id);
        history.replaceState(null, "", `#${cat.id}`);
      });

      tabsContainer.appendChild(btn);
    });
  }

  function activateTab(id) {
    document.querySelectorAll("#menu-tabs button")
      .forEach(btn => {
        btn.classList.toggle("active", btn.dataset.id === id);
      });
  }

  function renderCategory(category) {
  itemsContainer.innerHTML = "";

  category.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <div class="menu-item-header">
        <h3>${item.name}</h3>
        <span>${item.price}</span>
      </div>
      <p>${item.description}</p>
    `;

    itemsContainer.appendChild(div);
  });
}

});
