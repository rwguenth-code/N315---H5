export function loginView() {
  return `
<section class="login-page">
  <header class="login-banner">
    <div>
      <p class="eyebrow">Back to the trail</p>
      <h1>Welcome Back</h1>
    </div>
  </header>
  <div class="login-content">
    <div class="login-form-panel">
      <h2>Ready for your next adventure?</h2>
      <p class="auth-intro">Log in to Summit Ridge and get back to finding the gear for wherever the trail takes you.</p>
      <form id="loginForm">
        <label for="loginEmail">Email Address <span aria-hidden="true">*</span></label>
        <input id="loginEmail" name="email" type="email" placeholder="jane@example.com" autocomplete="email" required>
        <label for="loginPassword">Password <span aria-hidden="true">*</span></label>
        <input id="loginPassword" name="password" type="password" placeholder="••••••••••" autocomplete="current-password" required>
        <p id="feedback" class="form-feedback login-form-feedback" role="status" aria-live="polite"></p>
        <button class="btn" type="submit">Login <span aria-hidden="true">→</span></button>
      </form>
      <p class="auth-switch">New accounts aren’t available yet. Please contact us if you need help.</p>
    </div>
    <aside class="login-promo">
      <img src="./images/abd1.jpg" alt="Sunrise over a range of Rocky Mountain peaks">
      <p class="eyebrow">Boulder, CO · Est. 1998</p>
      <h2>Where the Trail Begins.</h2>
      <p>Premium outdoor gear and expert guidance for every adventure — from your first summit to your hundredth.</p>
    </aside>
  </div>
</section>
`;
}
//woo I did it!