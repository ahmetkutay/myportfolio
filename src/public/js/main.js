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

  // Ensure CSS is applied after HTMX content swaps
  document.body.addEventListener('htmx:afterSwap', function(event) {
    // Force a reflow to ensure styles are applied
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // This forces the browser to reapply styles
      void mainContent.offsetHeight;
    }

    // Ensure all skill badges and other elements have proper styling
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
      // Ensure Tailwind classes are applied
      badge.classList.add('px-3', 'py-1', 'rounded-full', 'text-sm', 'font-medium', 'bg-dark-600', 'text-gray-300', 'hover:bg-primary-700', 'hover:text-white', 'transition-colors', 'duration-200');
    });
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