document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".topbar");
  if (!header) return;

  header.innerHTML = `
    <!-- Hamburger stays LEFT as a sibling -->
    <label for="menu-toggle" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <!-- Animation container (CENTERED) -->
    <div class="astra-animation">
      <div class="anim-diamond left"></div>
      <div class="anim-diamond right"></div>
      <div class="anim-trail-left"></div>
      <div class="anim-trail-right"></div>
      <div class="anim-burst"></div>
      <div class="anim-star"></div>
    </div>


    <!-- Real logo stays RIGHT (hidden initially) -->
    <div class="real-logo hidden">
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

  /* Trigger the ceremony after a short delay */
  setTimeout(() => {
    header.classList.add("astra-ceremony");
  }, 450); // 450ms delay before ceremony begins


  /* Reveal the real logo after ceremony */
  /* Star absolute-position travel */
  setTimeout(() => {
    const animStar = document.querySelector(".anim-star");
    const realStar = document.querySelector(".topbar-star");

    if (!animStar || !realStar) return;

    // Get real star position
    const rect = realStar.getBoundingClientRect();

    // Your artistic offsets
    const offsetX = 3;   // shift right
    const offsetY = -1;  // shift up

    const targetX = rect.left + offsetX;
    const targetY = rect.top  + offsetY;

    // Animate the star to the exact pixel position
    animStar.animate([
      { left: animStar.style.left, top: animStar.style.top },
      { left: `${targetX}px`, top: `${targetY}px` }
    ], {
      duration: 1400,
      easing: "ease-in-out",
      fill: "forwards"
    });

  }, 4400); // star travel begins after burst settles


});
