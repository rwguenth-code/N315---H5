import { login } from "./model.js";

let cartCount = 0;

export function getCartCount() {
  return cartCount;
}

export function bindPageEvents(onAuthChange) {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const feedback = document.getElementById("feedback");

      if (login(formData.get("email").toString(), formData.get("password").toString())) {
        feedback.textContent = "You’re signed in. Welcome back!";
        feedback.classList.remove("is-error");
        onAuthChange();
        location.hash = "#/home";
      } else {
        feedback.textContent = "Incorrect email or password.";
        feedback.classList.add("is-error");
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name").toString();
      const subject = encodeURIComponent(formData.get("subject").toString());
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone")}\n\n${formData.get("message")}`,
      );
      const feedback = document.getElementById("contactFeedback");
      feedback.textContent = "Your message is ready. Open your email app to send it: ";
      const emailLink = document.createElement("a");
      emailLink.className = "text-link";
      emailLink.href = `mailto:hello@summitridge.com?subject=${subject}&body=${body}`;
      emailLink.textContent = "send email";
      feedback.append(emailLink);
    });
  }

  const homeNewsletterForm = document.getElementById("homeNewsletterForm");
  if (homeNewsletterForm) {
    homeNewsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      document.getElementById("homeNewsletterFeedback").textContent =
        "Thanks for your interest! Newsletter subscriptions aren't connected yet.";
      homeNewsletterForm.reset();
    });
  }

  const filters = document.querySelectorAll(".filter-chip");
  if (filters.length > 0) {
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const selectedCategory = filter.getAttribute("data-filter");
        let visibleCount = 0;

        filters.forEach((chip) => chip.classList.toggle("is-selected", chip === filter));
        document.querySelectorAll(".shop-grid .product").forEach((product) => {
          const isVisible = selectedCategory === "all" ||
            product.getAttribute("data-category") === selectedCategory;
          product.hidden = !isVisible;
          if (isVisible) visibleCount += 1;
        });

        document.getElementById("productCount").textContent = String(visibleCount);
      });
    });
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      cartCount += 1;
      const product = button.getAttribute("data-product");
      const count = document.getElementById("cartCount");
      if (count) {
        count.textContent = String(cartCount);
      }
      document.getElementById("cartFeedback").textContent =
        `${product} added to your cart (${cartCount} ${cartCount === 1 ? "item" : "items"}).`;
    });
  });
}
