document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".topbar");
  if (!header) return;

  header.innerHTML = `
    <!-- Animation container -->
    <div class="astra-animation">
      <div class="anim-diamond left"></div>
      <div class="anim-diamond right"></div>
      <div class="anim-trail"></div>
      <div class="anim-burst"></div>
      <div class="anim-star"></div>
    </div>

    <!-- Real logo (hidden initially) -->
    <div class="real-logo hidden">
      <label for="menu-toggle" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <a href="/index.html" class="topbar-logo">

        <!-- Row 1: star -->
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

      </a>
    </div>
  `;

  // Trigger the animation
  setTimeout(() => {
    header.classList.add("astra-ceremony");
  }, 50);

  // Reveal real logo after ceremony
  setTimeout(() => {
    document.querySelector(".real-logo").classList.remove("hidden");
    document.querySelector(".astra-animation").classList.add("fade-out");
  }, 3500); // ceremonial timing placeholder
});
