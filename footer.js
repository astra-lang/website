document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  footer.innerHTML = `
    <p>Astra™ — Patent Pending</p>
    <p class="footer-small">© 2026 Astra Project. All rights reserved.</p>
    <p class="footer-small">Contact: info@astra-lang.com</p>
  `;
});
