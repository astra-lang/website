document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelectorAll("[data-divider]");
  if (!divider.length) return;

  divider.forEach(el => {
    el.innerHTML = `
      <div class="divider">
        <div class="trail"></div>
        <div class="star">★</div>
      </div>
    `;
  });
});
