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
      <div class="anim-star">
        <svg viewBox="0 0 100 100" class="ceremony-star">
          <path d="M50 5 
                   L61 35 
                   L95 35 
                   L68 57 
                   L79 90 
                   L50 70 
                   L21 90 
                   L32 57 
                   L5 35 
                   L39 35 Z"
                fill="#0E385B"
                stroke="#0E385B"
                stroke-width="6"
                stroke-linejoin="round"
                stroke-linecap="round"/>
        </svg>
      </div>

    </div>

    <!-- Real logo stays RIGHT (hidden initially) -->
    <div class="real-logo hidden">
      <a href="/index.html" class="topbar-logo">
        <div class="star-row">
          <div class="topbar-star">
            <img src="/trail.png" class="trail-layer">
            <img src="/star.png" class="star-layer">
          </div>
        </div>
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
  }, 450);

  /* Star absolute-position travel */
  setTimeout(() => {
    const animStar = document.querySelector(".anim-star");
    const realStar = document.querySelector(".topbar-star");
    const container = document.querySelector(".astra-animation");
  
    if (!animStar || !realStar || !container) return;
  
    const starRect = realStar.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
  
    // Initial center position (explicitly set!)
    const startX = containerRect.width / 2 - 9; // 22px star → half = 11
    const startY = containerRect.height / 2 - 9;
  
    animStar.style.left = `${startX}px`;
    animStar.style.top = `${startY}px`;
  
    // Artistic offsets
    const offsetX = 4;
    const offsetY = 2;
  
    // Convert page coords → container coords
    const targetX = (starRect.left - containerRect.left) + offsetX;
    const targetY = (starRect.top  - containerRect.top)  + offsetY;
  
    const animation = animStar.animate([
      { left: `${startX}px`, top: `${startY}px` },
      { left: `${targetX}px`, top: `${targetY}px` }
    ], {
      duration: 1400,
      easing: "ease-in-out",
      fill: "forwards"
    });
  
    animation.onfinish = () => {
      animStar.style.left = `${targetX}px`;
      animStar.style.top = `${targetY}px`;
    };
  
  }, 4400);



  /* ⭐ Fade out animation container + reveal real logo */
  setTimeout(() => {
    const realLogo = document.querySelector(".real-logo");
    const anim = document.querySelector(".astra-animation");

    if (realLogo) realLogo.classList.remove("hidden");
    if (anim) anim.classList.add("fade-out");
  }, 6500);

});
