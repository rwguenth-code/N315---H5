export function homeView() {
  return `
<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Boulder, Colorado · Est. 1998</p>
    <h1>Where the<br><span>Trail</span> Begins.</h1>
    <p>Premium outdoor gear and expert guidance for every adventure — from your first summit to your hundredth. We'll make sure you're ready.</p>
    <div class="hero-actions">
      <a class="btn" href="#/shop">Shop now <span aria-hidden="true">→</span></a>
      <a class="btn btn-outline" href="#/guides">Explore adventures</a>
    </div>
  </div>
  <a class="hero-scroll" href="#discover">Scroll to explore <span aria-hidden="true">↓</span></a>
</section>

<section class="stats-band" aria-label="Summit Ridge at a glance">
  <div><strong>25<span>+</span></strong><span>Years in business</span></div>
  <div><strong>12,400<span>+</span></strong><span>Happy customers</span></div>
  <div><strong>2,400<span>+</span></strong><span>Products in stock</span></div>
  <div><strong>4.9 <span>★</span></strong><span>Average review</span></div>
</section>

<section class="category-section section" id="discover">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Explore the range</p>
      <h2>Shop by Category</h2>
    </div>
    <a class="text-link" href="#/shop">View All <span aria-hidden="true">›</span></a>
  </div>
  <div class="category-grid">
    <a class="category-card category-camp" href="#/shop"><span aria-hidden="true">⛺</span><h3>Camping</h3></a>
    <a class="category-card category-hiking" href="#/shop"><span aria-hidden="true">🥾</span><h3>Hiking</h3></a>
    <a class="category-card category-fishing" href="#/shop"><span aria-hidden="true">♧</span><h3>Fishing</h3></a>
    <a class="category-card category-kayaking" href="#/shop"><span aria-hidden="true">◉</span><h3>Kayaking</h3></a>
    <a class="category-card category-climb" href="#/shop"><span aria-hidden="true">△</span><h3>Climbing</h3></a>
    <a class="category-card category-apparel" href="#/shop"><span aria-hidden="true">▽</span><h3>Apparel</h3></a>
  </div>
</section>

<section class="home-featured">
  <div class="home-section-heading">
    <p class="eyebrow">Handpicked by our staff</p>
    <h1>Featured Products</h1>
  </div>
  <div class="home-product-grid">
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp5.jpg" alt="Green 65-liter hiking backpack"><span class="home-product-tag">Best Seller</span></a>
      <div class="home-product-details">
        <h2>Trailblazer 65L Backpack</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$289</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Trailblazer 65L Backpack" aria-label="Add Trailblazer 65L Backpack to cart">+</button></div>
      </div>
    </article>
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp3.jpg" alt="Three-season tent glowing under a starry sky"><span class="home-product-tag">New</span></a>
      <div class="home-product-details">
        <h2>Summit Shelter 3-Season Tent</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$449</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Summit Shelter 3-Season Tent" aria-label="Add Summit Shelter 3-Season Tent to cart">+</button></div>
      </div>
    </article>
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp1.jpg" alt="Hiker wearing a technical shell jacket on a mountain ridge"></a>
      <div class="home-product-details">
        <h2>Alpine Ridge Hardshell Jacket</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$398</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Alpine Ridge Hardshell Jacket" aria-label="Add Alpine Ridge Hardshell Jacket to cart">+</button></div>
      </div>
    </article>
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp2.jpg" alt="Paddlers kayaking on a calm river"></a>
      <div class="home-product-details">
        <h2>Riverbend Carbon Kayak Paddle</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$124</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Riverbend Carbon Kayak Paddle" aria-label="Add Riverbend Carbon Kayak Paddle to cart">+</button></div>
      </div>
    </article>
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp6.jpg" alt="Hiking boots and equipment arranged on a trail map"></a>
      <div class="home-product-details">
        <h2>Granite Peak Hiking Boots</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$175</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Granite Peak Hiking Boots" aria-label="Add Granite Peak Hiking Boots to cart">+</button></div>
      </div>
    </article>
    <article class="home-product">
      <a class="home-product-image" href="#/shop"><img src="./images/fp4.jpg" alt="Angler fly fishing in a mountain river"></a>
      <div class="home-product-details">
        <h2>Fly Fisher Pro Rod &amp; Reel Set</h2>
        <p class="home-product-rating" aria-label="Rated 5 out of 5 stars">★★★★★</p>
        <div class="home-product-footer"><strong>$320</strong><a href="#/shop">View Product <span aria-hidden="true">›</span></a><button class="home-add-to-cart add-to-cart" type="button" data-product="Fly Fisher Pro Rod & Reel Set" aria-label="Add Fly Fisher Pro Rod and Reel Set to cart">+</button></div>
      </div>
    </article>
  </div>
  <p id="cartFeedback" class="home-cart-feedback" role="status" aria-live="polite"></p>
  <a class="home-view-all" href="#/shop">View All Products <span aria-hidden="true">›</span></a>
</section>

<section class="home-inspiration">
  <div class="home-inspiration-inner">
    <div class="home-inspiration-heading">
      <div>
        <p class="eyebrow">Go deeper</p>
        <h2>Adventure Inspiration</h2>
      </div>
      <a href="#/guides">All Guides <span aria-hidden="true">›</span></a>
    </div>
    <div class="home-inspiration-grid">
      <a class="home-inspiration-card" href="#/guides">
        <img src="./images/ai1.jpg" alt="Layered Rocky Mountain peaks at sunset">
        <div><h3>Rocky Mountain High: A Weekend Trek</h3><p>From alpine lakes to sweeping ridgelines, discover the best weekend hikes in Colorado and beyond.</p><b>Read More <span aria-hidden="true">→</span></b></div>
      </a>
      <a class="home-inspiration-card" href="#/guides">
        <img src="./images/ai2.jpg" alt="Kayakers paddling through bright turquoise water">
        <div><h3>First Timer's Guide to Whitewater Kayaking</h3><p>Our essential starter kit, the skills to know, and the right rivers for your first whitewater run.</p><b>Read More <span aria-hidden="true">→</span></b></div>
      </a>
      <a class="home-inspiration-card" href="#/guides">
        <img src="./images/ai3.jpg" alt="A tent beneath a starry sky in a forest campsite">
        <div><h3>Stargazing from Base Camp: Colorado's Best Sites</h3><p>Find dark skies, quiet campsites, and a little more wonder on your next night outside.</p><b>Read More <span aria-hidden="true">→</span></b></div>
      </a>
    </div>
  </div>
</section>

<section class="home-testimonials">
  <div class="home-testimonials-inner">
    <div class="home-testimonials-heading">
      <p class="eyebrow">Real adventures. Real stories.</p>
      <h2>What Our Customers Say</h2>
    </div>
    <div class="home-testimonial-grid">
      <article class="home-testimonial">
        <p class="home-testimonial-rating" aria-label="5 out of 5 stars">★★★★★</p>
        <blockquote>“Summit Ridge outfitted my entire PCT section hike. The staff spent two hours with me making sure every piece of gear was the right fit. I can't recommend them enough.”</blockquote>
        <div class="home-testimonial-author"><span class="home-testimonial-avatar" aria-hidden="true">SK</span><p><strong>Sarah K.</strong><span>Trail Runner · Denver, CO</span></p></div>
      </article>
      <article class="home-testimonial">
        <p class="home-testimonial-rating" aria-label="5 out of 5 stars">★★★★★</p>
        <blockquote>“Been shopping here for six years. The loyalty program is solid, but it's the genuine expertise that keeps me coming back. They really know their gear.”</blockquote>
        <div class="home-testimonial-author"><span class="home-testimonial-avatar" aria-hidden="true">MT</span><p><strong>Marcus T.</strong><span>Weekend Warrior · Boulder, CO</span></p></div>
      </article>
      <article class="home-testimonial">
        <p class="home-testimonial-rating" aria-label="5 out of 5 stars">★★★★★</p>
        <blockquote>“I checked all my students with Summit Ridge gear. The staff listened to what I needed and helped me find the right fit—without pushing the priciest option.”</blockquote>
        <div class="home-testimonial-author"><span class="home-testimonial-avatar" aria-hidden="true">PS</span><p><strong>Priya S.</strong><span>Kayaking Instructor · Fort Collins, CO</span></p></div>
      </article>
    </div>
  </div>
</section>

<section class="newsletter">
  <p class="eyebrow">Stay in the loop</p>
  <h2>Get Trail-Ready Updates</h2>
  <p>New gear drops, expert guides, seasonal tips, and inspiration — delivered twice a month. No spam, ever.</p>
  <form class="home-newsletter-form" id="homeNewsletterForm">
    <label class="visually-hidden" for="homeNewsletterEmail">Your email address</label>
    <input id="homeNewsletterEmail" name="email" type="email" placeholder="your@email.com" autocomplete="email" required>
    <button class="btn" type="submit">Subscribe</button>
  </form>
  <p id="homeNewsletterFeedback" class="home-newsletter-feedback" role="status" aria-live="polite"></p>
</section>
`;
}
