// Mobile Menu Functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navLinksItems = document.querySelectorAll('.nav-links a');

function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on nav links
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        if (href.startsWith('http') || href.startsWith('mailto')) return;
        
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(30, 26, 22, 0.96)';
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(42, 36, 30, 0.94)';
        header.style.boxShadow = 'none';
    }
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.reg-card, .detail-item, .rules-item, .category-card, .contact-item, .schedule-item, .criterion, .info-box');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Contact items interaction with click feedback
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 150);
        });
        
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});