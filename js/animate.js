document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animated-section').forEach(el => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
  });
});
