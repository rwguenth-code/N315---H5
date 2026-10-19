export function aboutView() {
  return `
<section class="page-banner about-banner">
  <p class="eyebrow">Boulder, Colorado · Est. 1998</p>
  <h1>Our Story</h1>
</section>

<section class="about-story section">
  <div class="about-copy">
    <p class="eyebrow">A neighborhood outfitter</p>
    <h2>We Started on a Trail.<br>We Built a Community.</h2>
    <p>Summit Ridge Outfitters was founded in 1998 by Dana Holbrook after completing a solo thru-hike of the Appalachian Trail. What started as a small gear shop in a 600-square-foot Boulder storefront has grown into one of Colorado’s most trusted outdoor outfitters — but the mission hasn’t changed.</p>
    <p>We believe that the right gear, paired with the right knowledge, changes people’s relationships with the outdoors. Not just their safety, but their confidence. We’ve outfitted first-timers heading to Rocky Mountain National Park and seasoned alpinists bound for Denali.</p>
    <p>Every product we carry has been field-tested by our staff. Every recommendation comes from personal experience. That’s the Summit Ridge difference — and it’s why 87% of our new customers arrive referred by existing ones.</p>
  </div>
  <div class="about-story-image">
    <img src="./images/other.jpg" alt="Hiker crossing a mountain ridge at sunset">
    <div class="about-years"><strong>25<span>+</span></strong><span>Years serving<br>the outdoors</span></div>
  </div>
</section>

<section class="mission-panel">
  <p class="eyebrow">Our mission</p>
  <blockquote>“To equip every adventurer — regardless of experience or background — with the gear, knowledge, and confidence to safely explore the natural world.”</blockquote>
</section>

<section class="values-section about-values">
  <div class="section-heading section">
    <div><p class="eyebrow">What we believe</p><h2>Our Core Values</h2></div>
  </div>
  <div class="values-grid">
    <article><span>01</span><h3>Expertise, shared.</h3><p>We pair tested gear with real-world advice from people who use it.</p></article>
    <article><span>02</span><h3>Everyone belongs outside.</h3><p>We make the outdoors more welcoming, one good first trip at a time.</p></article>
    <article><span>03</span><h3>Leave it better.</h3><p>We protect the places and trails that give us so much.</p></article>
  </div>
</section>

<section class="team-section section">
  <div class="section-heading">
    <div><p class="eyebrow">Good people, great outdoors</p><h2>Meet Our Team</h2></div>
    <p class="shop-count">A few of the friendly faces at Summit Ridge</p>
  </div>
  <div class="team-grid">
    <article><img src="./images/person1.jpg" alt="Dana Holbrook, founder and hiking guide"><h3>Dana Holbrook</h3><p>Founder · Hiking &amp; backpacking</p></article>
    <article><img src="./images/person2.jpg" alt="Marcus Lee, climbing specialist"><h3>Marcus Lee</h3><p>Gear specialist · Climbing</p></article>
    <article><img src="./images/person3.jpg" alt="Lena Ramos, camping and trail guide"><h3>Lena Ramos</h3><p>Guide · Camping &amp; trail life</p></article>
  </div>
</section>

<section class="timeline-section">
  <div class="section-heading"><div><p class="eyebrow">A few miles behind us</p><h2>Our Journey</h2></div></div>
  <ol class="timeline">
    <li><strong>1998</strong><h3>A small shop, a big trail</h3><p>Dana opens the original Boulder storefront after returning from the Appalachian Trail.</p></li>
    <li><strong>2008</strong><h3>More room to explore</h3><p>We grow our team and make space for more of the gear our community asks for.</p></li>
    <li><strong>2017</strong><h3>Giving back outside</h3><p>Our crew begins regular trail-care days with local outdoor partners.</p></li>
    <li><strong>Today</strong><h3>Still finding new trails</h3><p>More than 25 years later, we’re still here to help everyone feel at home outdoors.</p></li>
  </ol>
</section>

<section class="about-visit">
  <div class="about-recognition">
    <p class="eyebrow">Recognition &amp; Certifications</p>
    <ul aria-label="Our certifications">
      <li><span aria-hidden="true">♧</span> B Corp Certified</li>
      <li><span aria-hidden="true">♧</span> Outdoor Retailer Award 2023</li>
      <li><span aria-hidden="true">♧</span> 1% for the Planet Member</li>
      <li><span aria-hidden="true">♧</span> REI Co-op Partner</li>
      <li><span aria-hidden="true">♧</span> Leave No Trace Trainer</li>
      <li><span aria-hidden="true">♧</span> AMGA Affiliated Guiding</li>
    </ul>
  </div>
  <div class="about-store">
    <div class="about-store-inner">
      <div class="about-store-copy">
        <p class="eyebrow">Find us</p>
        <h2>Visit the Store</h2>
        <p><span aria-hidden="true">♧</span><span><strong>4821 Trailhead Blvd</strong><br>Boulder, CO 80301</span></p>
        <a href="tel:+13035550182"><span aria-hidden="true">⌕</span>(303) 555-0182</a>
        <p><span aria-hidden="true">◷</span>Mon–Fri: 8am–8pm · Sat: 7am–9pm · Sun: 9am–6pm</p>
      </div>
      <div class="about-store-map" role="img" aria-label="Map showing Summit Ridge Outfitters at 4821 Trailhead Boulevard in Boulder, Colorado">
        <div class="about-store-marker">
          <span aria-hidden="true">▲</span>
          <div><strong>Summit Ridge Outfitters</strong><small>4821 Trailhead Blvd · Boulder, CO</small><a href="https://maps.google.com/?q=4821+Trailhead+Blvd+Boulder+CO+80301" target="_blank" rel="noopener noreferrer">Get Directions</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}
