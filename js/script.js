document.addEventListener("DOMContentLoaded", function() {
  // ==== Fade-in при скролі для заголовків і блоків ====
  const fadeElements = document.querySelectorAll('.fade-scroll');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.3});
  fadeElements.forEach(el => observer.observe(el));


  // ==== Анімація зображень при наведенні (для другої сторінки) ====
  const images = document.querySelectorAll('.shelter-images img');
  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      img.style.filter = 'brightness(0.85)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.filter = 'brightness(1)';
    });
  });
});
