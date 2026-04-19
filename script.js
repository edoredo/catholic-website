// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.style.opacity = '0.7';
        setTimeout(() => {
            hamburger.style.opacity = '1';
        }, 200);
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button Click Event
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const ecumenicalSection = document.getElementById('ecumenical');
        if (ecumenicalSection) {
            ecumenicalSection.scrollIntoView({ behavior: 'smooth' });
            // Add a pulse animation
            ecumenicalSection.style.animation = 'none';
            setTimeout(() => {
                ecumenicalSection.style.animation = 'pulse 0.6s ease-in-out';
            }, 10);
        }
    });
}

// Make Cards Clickable - Navigate to Detail Pages
const sectionCards = document.querySelectorAll('.section-card');
sectionCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', () => {
        const title = card.querySelector('.section-title').textContent.trim();
        let detailPage = '';
        
        if (title.includes('Christology')) {
            detailPage = 'christology-detail.html';
        } else if (title.includes('Ecumenical')) {
            detailPage = 'ecumenical-detail.html';
        } else if (title.includes('Doctrines')) {
            detailPage = 'doctrines-detail.html';
        }
        
        if (detailPage) {
            window.location.href = detailPage;
        }
    });
});

// Read More Button Click Events
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = button.closest('.section-card').querySelector('.section-title').textContent.trim();
        let detailPage = '';
        
        if (title.includes('Christology')) {
            detailPage = 'christology-detail.html';
        } else if (title.includes('Ecumenical')) {
            detailPage = 'ecumenical-detail.html';
        } else if (title.includes('Doctrines')) {
            detailPage = 'doctrines-detail.html';
        }
        
        if (detailPage) {
            window.location.href = detailPage;
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add some console logging for debugging
console.log('Navigation and interactive elements loaded successfully!');
