// Add HTMX indicator styles
document.addEventListener('DOMContentLoaded', function() {
  // Hide HTMX indicators by default
  const indicators = document.querySelectorAll('.htmx-indicator');
  indicators.forEach(indicator => {
    indicator.style.display = 'none';
  });

  // Add HTMX event listeners
  document.body.addEventListener('htmx:beforeRequest', function(event) {
    const indicator = event.detail.elt.querySelector('.htmx-indicator');
    if (indicator) {
      indicator.style.display = 'block';
    }
  });

  document.body.addEventListener('htmx:afterRequest', function(event) {
    const indicator = event.detail.elt.querySelector('.htmx-indicator');
    if (indicator) {
      indicator.style.display = 'none';
    }
  });

  // Add scroll animation
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});