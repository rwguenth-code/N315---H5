export function loadFooter() {
  document.getElementById("footer").innerHTML = `
<div class="footer-wrapper">
  <div class="footer-brand">
    <a class="logo" href="#/home" aria-label="Summit Ridge Outfitters home"><span class="logo-mark" aria-hidden="true">▲</span><span class="logo-copy"><strong>SUMMIT RIDGE</strong><small>OUTFITTERS · EST. 1998</small></span></a>
    <p>Colorado’s most trusted outdoor outfitter since 1998. Expert gear, expert advice, real adventures.</p>
    <div class="footer-socials" aria-label="Social media">
      <a href="#/about" aria-label="Instagram">◎</a>
      <a href="#/about" aria-label="Facebook">f</a>
      <a href="#/about" aria-label="YouTube">▶</a>
      <a href="#/about" aria-label="Twitter">♥</a>
    </div>
  </div>
  <div class="footer-column"><h3>Explore</h3><a href="#/home">Home</a><a href="#/shop">Shop All Gear</a><a href="#/guides">Adventure Guides</a><a href="#/about">About Us</a><a href="#/contact">Contact</a></div>
  <div class="footer-column footer-contact"><h3>Contact</h3><p><span aria-hidden="true">♧</span> 4821 Trailhead Blvd<br><span class="footer-contact-indent">Boulder, CO 80301</span></p><a href="tel:+13035550182"><span aria-hidden="true">⌕</span> (303) 555-0182</a><a href="mailto:hello@summitridge.com"><span aria-hidden="true">✉</span> hello@summitridge.com</a></div>
  <div class="footer-column footer-hours"><h3>Store Hours</h3><p><span>Mon – Fri</span><strong>8am – 8pm</strong></p><p><span>Saturday</span><strong>7am – 9pm</strong></p><p><span>Sunday</span><strong>9am – 6pm</strong></p><b><i aria-hidden="true"></i> Open Now</b></div>
  <div class="footer-bottom"><span>&copy; 2026 Summit Ridge Outfitters, LLC. All rights reserved.</span><nav aria-label="Legal"><a href="#/contact">Privacy Policy</a><a href="#/contact">Terms of Service</a><a href="#/contact">Returns &amp; Exchanges</a></nav></div>
</div>
`;
}
