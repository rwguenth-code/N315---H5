import { homeView } from "../pages/home.js";
import { guidesView } from "../pages/guides.js";
import { aboutView } from "../pages/about.js";
import { contactView } from "../pages/contact.js";
import { loginView } from "../pages/login.js";
import { loadHeader } from "../components/header.js";
import { bindPageEvents } from "./utility.js";

const routes = {
  home: homeView,
  shop: homeView,
  guides: guidesView,
  about: aboutView,
  contact: contactView,
  login: loginView,
};

export function initRouter() {
  function loadRoute() {
    const routeName = location.hash.startsWith("#/")
      ? location.hash.slice(2).split("?")[0]
      : "home";
    const page = routes[routeName] || (() => `
      <section class="section">
        <p class="eyebrow">Page not found</p>
        <h1>That trail doesn’t go anywhere.</h1>
        <a class="text-link" href="#/home">Return home</a>
      </section>
    `);

    document.getElementById("app").innerHTML = page();
    bindPageEvents(loadHeader);
  }

  window.addEventListener("hashchange", loadRoute);

  loadRoute();
}
