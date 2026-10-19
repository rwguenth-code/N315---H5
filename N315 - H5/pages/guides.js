export function guidesView() {
  return `
<section class="page-banner guides-banner">
  <p class="eyebrow">Expert knowledge</p>
  <h1>Adventure Guides</h1>
</section>

<section class="guide-intro">
  <div>
    <h2>Learn from People Who’ve Been There</h2>
    <p>Every guide in our library is written by a Summit Ridge staff member or trusted guide partner with firsthand field experience. Whether you’re heading into the backcountry for the first time or refining technique after years of practice, our guides give you the knowledge to go further — and safer.</p>
  </div>
  <div class="guide-stats" aria-label="Guide library statistics">
    <div><strong>34</strong><span>Published guides</span></div>
    <div><strong>6</strong><span>Expert authors</span></div>
    <div><strong>48K</strong><span>Monthly readers</span></div>
  </div>
</section>

<section class="guide-library">
  <div class="guide-list">
    <article class="guide-card" data-guide-category="Camping">
      <div class="guide-card-image"><img src="./images/ai3.jpg" alt="A tent beneath a starry sky in a forest campsite"><span>Camping</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Dana Holbrook</span><span>8 min read</span></div><h2>Beginner Camping Checklist</h2><p>Everything a first-timer needs to pack — shelter, sleep systems, cooking gear, and leave-no-trace essentials. Don’t leave home without it.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Start with the essentials: a suitable tent, a warm sleeping bag and pad, water, food, a light source, and weather-ready layers. Check your route, campsite rules, and forecast before leaving, and pack out everything you bring in.</p></details></div>
    </article>
    <article class="guide-card" data-guide-category="Hiking">
      <div class="guide-card-image"><img src="./images/ai1.jpg" alt="Layered mountain ridges at sunset"><span>Hiking</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Lena Ramos</span><span>12 min read</span></div><h2>Best Indiana Hiking Trails</h2><p>Hoosiers have more to explore than you might think. We’ve mapped 12 hidden gems across state and national parks with ratings and parking info.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Choose a route that fits your group and the current conditions. Bring a map, water, snacks, and a light layer, and check local park updates before you set out.</p></details></div>
    </article>
    <article class="guide-card" data-guide-category="Gear Guide">
      <div class="guide-card-image"><img src="./images/fp5.jpg" alt="A green hiking backpack ready for an adventure"><span>Gear Guide</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Marcus Okonkwo</span><span>10 min read</span></div><h2>Choosing the Right Backpack</h2><p>Torso length, hip-belt fit, and frame type all matter more than volume alone. Our specialists walk you through every variable so you buy right the first time.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Try a pack with weight in it, adjust the hip belt first, and make sure the shoulder straps wrap comfortably without carrying all the load. A good fit makes long days more enjoyable.</p></details></div>
    </article>
    <article class="guide-card" data-guide-category="Camping">
      <div class="guide-card-image"><img src="./images/fp3.jpg" alt="A tent glowing beneath the stars"><span>Camping</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Dana Holbrook</span><span>7 min read</span></div><h2>Your First Night Under the Stars</h2><p>Picking a campsite, setting up in changing weather, and the simple comforts that make sleeping outside feel like second nature.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Practice setting up your tent before your trip, choose a durable and permitted site, and keep food stored according to local wildlife guidance. A dry base layer makes a welcome bedtime layer.</p></details></div>
    </article>
    <article class="guide-card" data-guide-category="Kayaking">
      <div class="guide-card-image"><img src="./images/ai2.jpg" alt="Kayakers paddling through turquoise water"><span>Kayaking</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Riley Chen</span><span>9 min read</span></div><h2>A Calm-Water Kayaking Primer</h2><p>Learn the basics of fit, paddling, and planning a first outing, plus the safety checks our team never skips.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Wear a properly fitted PFD, check wind and water conditions, tell someone your plan, and go with an experienced paddler while learning. Conditions can change quickly, even on calm water.</p></details></div>
    </article>
    <article class="guide-card" data-guide-category="Ethics">
      <div class="guide-card-image"><img src="./images/abd1.jpg" alt="Mountain wilderness at sunrise"><span>Ethics</span></div>
      <div class="guide-card-body"><div class="guide-byline"><span>Lena Ramos</span><span>6 min read</span></div><h2>Leave It Better Than You Found It</h2><p>A practical introduction to low-impact travel, respecting wildlife, and helping keep wild places welcoming for everyone.</p><details><summary>Read More <span aria-hidden="true">→</span></summary><p>Plan ahead, travel on durable surfaces, give wildlife plenty of space, be considerate of other visitors, and pack out your trash—including small items and food scraps.</p></details></div>
    </article>
  </div>
</section>

<section class="guide-featured-video">
  <div class="guide-featured-video-inner">
    <div class="guide-featured-copy">
      <p class="eyebrow">Featured Video</p>
      <h2>How to Choose Your First Backpacking Tent</h2>
      <p>Our gear specialist Marcus walks you through seasonality ratings, pole systems, vestibule space, weight-to-livability ratios, and setup time — so you can pick the tent that matches your real adventures, not just a spec sheet.</p>
      <p class="guide-video-meta"><span>28 min</span><span>1.2k views</span><span>Gear Guides Series, Ep. 4</span></p>
      <a class="btn" href="#featured-video-preview"><span aria-hidden="true">▶</span> Watch Now</a>
    </div>
    <a class="guide-video-preview" id="featured-video-preview" href="#featured-video-preview" aria-label="Featured video preview: How to Choose Your First Backpacking Tent">
      <img src="./images/fp3.jpg" alt="A tent glowing beneath a starry sky">
      <span class="guide-video-play" aria-hidden="true">▶</span>
      <span class="guide-video-duration">28:14</span>
    </a>
  </div>
</section>
`;
}
