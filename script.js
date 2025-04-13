// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle icon between menu and close using data-lucide
    const iconElement = menuButton.querySelector('i[data-lucide]');
    if (iconElement) {
        const currentIcon = iconElement.getAttribute('data-lucide');
        const newIcon = currentIcon === 'menu' ? 'x' : 'menu';
        iconElement.setAttribute('data-lucide', newIcon);
        // Re-render the specific icon
        if (typeof lucide !== 'undefined') {
            lucide.createIcons({
                nodes: [iconElement],
                attrs: { // Ensure attributes like class are preserved
                    'class': iconElement.getAttribute('class') || 'w-6 h-6'
                }
            });
        }
    }
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const iconElement = menuButton.querySelector('i[data-lucide]');
            if (iconElement) {
                iconElement.setAttribute('data-lucide', 'menu');
                 // Re-render the specific icon
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({
                        nodes: [iconElement],
                        attrs: {
                           'class': iconElement.getAttribute('class') || 'w-6 h-6'
                        }
                    });
                }
            }
        }
    });
});

// Simple Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Check if Lucide is available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error('Lucide icons library not loaded');
    }
});
