/* Legacy helper kept for backwards compatibility. The homepage uses music.js for the YouTube track. */
(function () {
  const reveals = document.querySelectorAll('.scroll-reveal');
  if (!('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
})();
