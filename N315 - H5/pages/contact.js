export function contactView() {
  return `
<section class="page-banner contact-banner">
  <p class="eyebrow">We’re here to help</p>
  <h1>Get in Touch</h1>
</section>

<section class="contact-layout section">
  <div class="contact-main">
    <p class="contact-intro">Whether you have a gear question, need help planning a trip, or just want to say hello — our team responds within one business day.</p>
    <form id="contactForm" class="contact-form">
      <div class="contact-form-row">
        <div><label for="contactName">Full Name <span>*</span></label><input id="contactName" name="name" type="text" placeholder="Jane Smith" autocomplete="name" required></div>
        <div><label for="contactEmail">Email Address <span>*</span></label><input id="contactEmail" name="email" type="email" placeholder="jane@example.com" autocomplete="email" required></div>
      </div>
      <label for="contactPhone">Phone Number</label>
      <input id="contactPhone" name="phone" type="tel" placeholder="(303) 555-0000" autocomplete="tel">
      <label for="contactSubject">Subject <span>*</span></label>
      <input id="contactSubject" name="subject" type="text" required>
      <label for="contactMessage">Message <span>*</span></label>
      <textarea id="contactMessage" name="message" rows="5" placeholder="Tell us what’s on your mind — the more detail, the better we can help." required></textarea>
      <button class="btn contact-submit" type="submit">Send Message <span aria-hidden="true">→</span></button>
      <p id="contactFeedback" class="form-feedback" role="status" aria-live="polite"></p>
    </form>
  </div>

  <aside class="contact-sidebar">
    <section>
      <h2>Store Information</h2>
      <p class="contact-info"><span class="contact-icon" aria-hidden="true">⌖</span><span><strong>4821 Trailhead Blvd</strong><br>Boulder, CO 80301</span></p>
      <p class="contact-info"><span class="contact-icon" aria-hidden="true">♧</span><a href="tel:+13035550182">(303) 555-0182</a></p>
      <p class="contact-info"><span class="contact-icon" aria-hidden="true">✉</span><a href="mailto:hello@summitridge.com">hello@summitridge.com</a></p>
    </section>
    <section class="store-hours">
      <h2>Store Hours</h2>
      <p><span>Mon – Fri</span><strong>8am – 8pm</strong></p>
      <p><span>Saturday</span><strong>7am – 9pm</strong></p>
      <p><span>Sunday</span><strong>9am – 6pm</strong></p>
      <p class="open-now"><span aria-hidden="true">●</span> Open Now</p>
    </section>
    <a class="map-card" href="https://maps.google.com/?q=4821+Trailhead+Blvd+Boulder+CO+80301" target="_blank" rel="noreferrer">
      <span class="map-pin" aria-hidden="true">⌖</span><strong>Boulder, CO</strong><span>Click to open in Maps</span>
    </a>
    <section class="social-section">
      <h2>Follow Along</h2>
      <div class="social-links">
        <a href="https://instagram.com" aria-label="Instagram">◎</a>
        <a href="https://facebook.com" aria-label="Facebook">f</a>
        <a href="https://youtube.com" aria-label="YouTube">▷</a>
        <a href="https://twitter.com" aria-label="Twitter">♥</a>
      </div>
    </section>
  </aside>
</section>

<section class="faq-section">
  <p class="eyebrow">Common Questions</p>
  <h2>FAQs</h2>
  <div class="faq-list">
    <details><summary>Do you offer gear rentals? <span>+</span></summary><p>Yes. We offer rentals on select camping, hiking, and paddling gear. Contact the store or stop by to check availability and reserve what you need.</p></details>
    <details><summary>What is your return policy? <span>+</span></summary><p>Unused gear in its original condition can be returned within 30 days with proof of purchase. Bring it by the shop or contact us and we’ll help.</p></details>
    <details><summary>Do you price-match competitors? <span>+</span></summary><p>We’ll review eligible advertised prices from authorized retailers. Get in touch or bring the listing to the store and our team will be glad to help.</p></details>
    <details><summary>Can I get gear fitted before purchasing? <span>+</span></summary><p>Absolutely. Stop by the Boulder shop for help fitting packs, footwear, and other equipment before you head out.</p></details>
    <details><summary>Do you ship internationally? <span>+</span></summary><p>At this time, we ship within the United States only. Contact us if you have questions about an order or delivery location.</p></details>
  </div>
</section>
`;
}
