// Minimal, optional enhancements only

// Mobile nav toggle
const toggle = document.querySelector('[data-toggle="nav"]');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Scroll to top visibility
const toTop = document.querySelector('.to-top');
const onScroll = () => {
  if (!toTop) return;
  if (window.scrollY > 420) toTop.classList.add('show');
  else toTop.classList.remove('show');
};
window.addEventListener('scroll', onScroll);
if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Optional: mock countdown (visual placeholder; not precise time logic)
document.querySelectorAll('[data-countdown]').forEach(el => {
  const parts = el.querySelectorAll('[data-part]');
  let t = 2 * 60 * 60 + 35 * 60 + 17; // 2h 35m 17s demo
  const tick = () => {
    if (t <= 0) t = 2 * 60 * 60 + 35 * 60 + 17;
    const d = Math.floor(t / (24 * 3600));
    const h = Math.floor((t % (24 * 3600)) / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    const map = { d, h, m, s };
    parts.forEach(p => {
      const key = p.getAttribute('data-part');
      p.textContent = String(map[key]).padStart(2, '0');
    });
    t--;
  };
  tick();
  setInterval(tick, 1000);
});









const toggleBtn = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
