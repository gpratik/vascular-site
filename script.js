// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
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
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.problem-card, .treatment-card, .stat-card, .feature-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Problem cards interaction
document.querySelectorAll('.problem-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Treatment cards interaction
document.querySelectorAll('.treatment-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.treatment-icon i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.treatment-icon i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.circulatory-system');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add click handlers for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Add a slight delay before starting the typing effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// Add pulse animation to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    setInterval(() => {
        ctaButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Add floating animation to blood flow elements
function animateBloodFlow() {
    const bloodFlows = document.querySelectorAll('.blood-flow');
    
    bloodFlows.forEach((flow, index) => {
        const delay = index * 500;
        
        setInterval(() => {
            flow.style.opacity = '0';
            flow.style.transform = 'scale(0.5)';
            
            setTimeout(() => {
                flow.style.opacity = '1';
                flow.style.transform = 'scale(1)';
                
                setTimeout(() => {
                    flow.style.opacity = '0';
                    flow.style.transform = 'scale(0.5) translateX(100px)';
                }, 1500);
            }, 100);
        }, 3000);
    });
}

// Initialize blood flow animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateBloodFlow, 1000);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(section);
    });
}

// Add CSS for revealed sections
const style = document.createElement('style');
style.textContent = `
    .section.revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Initialize reveal animation
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Add interactive tooltips for medical terms
function addTooltips() {
    const medicalTerms = {
        'angioplasty': 'A procedure to widen blocked or narrowed blood vessels',
        'stenting': 'Placing a small tube to keep blood vessels open',
        'DVT': 'Deep Vein Thrombosis - blood clots in deep veins',
        'aneurysm': 'A bulge in a blood vessel wall that can be dangerous if it bursts'
    };
    
    Object.keys(medicalTerms).forEach(term => {
        const elements = document.querySelectorAll(`*:contains("${term}")`);
        elements.forEach(el => {
            if (el.textContent.includes(term)) {
                el.title = medicalTerms[term];
                el.style.cursor = 'help';
                el.style.borderBottom = '1px dotted #2563eb';
            }
        });
    });
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', addTooltips);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Arrow key navigation between sections
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        const sections = ['home', 'what-is', 'problems', 'treatments', 'importance'];
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex < sections.length - 1) {
            scrollToSection(sections[currentIndex + 1]);
        }
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        const sections = ['home', 'what-is', 'problems', 'treatments', 'importance'];
        const currentSection = getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex > 0) {
            scrollToSection(sections[currentIndex - 1]);
        }
    }
});

// Helper function to get current section
function getCurrentSection() {
    const sections = ['home', 'what-is', 'problems', 'treatments', 'importance'];
    let currentSection = 'home';
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    return currentSection;
}

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const currentSection = getCurrentSection();
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation links
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);

