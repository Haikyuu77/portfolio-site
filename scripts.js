// If you want to add interactivity, you can do so here
// For example, a smooth scroll to sections or a toggle menu for mobile

// Example of a simple scroll:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const targetElement = document.querySelector(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });