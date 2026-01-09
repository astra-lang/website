document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  if (!menu) return;

  menu.innerHTML = `
    <a href="/pages/philosophy.html">Philosophy</a>
    <a href="/pages/what-is-astra.html">What is Astra?</a>
    <a href="/pages/docs.html">Docs</a>
    <a href="/pages/roadmap.html">Roadmap</a>
    <a href="/pages/ecosystem.html">Ecosystem</a>
    <a href="/pages/foundations.html">Foundations</a>
  `;
});
