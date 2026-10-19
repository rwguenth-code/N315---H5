import { isLoggedIn, logout } from "../src/model.js";
import { getCartCount } from "../src/utility.js";

export function loadHeader() {
  document.getElementById("header").innerHTML = `
<nav>
  <a class="logo" href="#/home" aria-label="Summit Ridge Outfitters home">
    <span class="logo-mark" aria-hidden="true">▲</span>
    <span class="logo-copy"><strong>SUMMIT RIDGE</strong><small>OUTFITTERS · EST. 1998</small></span>
  </a>
  <button class="mobile-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
  <ul class="nav-links">
    <li><a href="#/shop">Shop</a></li>
    <li><a href="#/guides">Adventure Guides</a></li>
    <li><a href="#/about">About Us</a></li>
    <li><a href="#/contact">Contact</a></li>
    <li>${isLoggedIn() ? '<button class="nav-action" id="logoutBtn" type="button">Logout</button>' : '<a class="nav-login" href="#/login">Login</a>'}</li>
    <li><a class="nav-icon" href="#/shop" aria-label="Search the shop"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2"></circle><path d="m15.5 15.5 4 4"></path></svg></a></li>
    <li><a class="nav-icon cart-link" href="#/shop" aria-label="Shopping cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.5L21 8H6"></path><circle cx="10" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg><span class="cart-count" id="cartCount">${getCartCount()}</span></a></li>
  </ul>
</nav>
`;

  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
  });

  function setMenuOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    navLinks.classList.toggle("is-open", isOpen);
  }

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logout();
      loadHeader();
      location.hash = "#/home";
    });
  }
}
