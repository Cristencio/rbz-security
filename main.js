document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".menu-toggle");
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!nav || !toggle || !menuButton) return;

  const syncState = () => {
    const isOpen = toggle.checked;
    nav.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
  };

  syncState();

  toggle.addEventListener("change", syncState);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.checked = false;
      syncState();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggle.checked = false;
      syncState();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      toggle.checked = false;
      syncState();
    }
  });
});