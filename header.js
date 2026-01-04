document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".topbar");
  if (!header) return;

  header.innerHTML = `
    <label for="menu-toggle" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div class="topbar-logo">

      <!-- Row 1: star centered over Astra only -->
      <div class="star-row">
        <div class="topbar-star">
          <img src="/trail.png" class="trail-layer">
          <img src="/star.png" class="star-layer">
        </div>
      </div>

      <!-- Row 2: Astra + TM -->
      <div class="text-row">
        <div class="astra-wrapper">
          <div class="topbar-text">Astra</div>
        </div>
        <div class="topbar-tm">™</div>
      </div>

    </div>
  `;
});
