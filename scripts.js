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

// Navigation highlight
const highlightNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
};

// Dark mode toggle
const setupDarkMode = () => {
    const nav = document.querySelector('nav');
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌓';
    toggle.classList.add('theme-toggle');
    nav.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};

// Skills toggle
const setupSkillsToggle = () => {
    const skillTiles = document.querySelectorAll('.skill-tile');
    
    skillTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            tile.classList.toggle('expanded');
        });
    });
};

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    highlightNav();
    setupDarkMode();
    setupSkillsToggle();
});