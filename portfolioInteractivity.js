// portfolioInteractivity.js

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Smooth Scrolling
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Skill Bars Animation
const animateSkillBars = () => {
    const bars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach(bar => {
                    bar.style.width = bar.dataset.skillLevel;
                });
            }
        });
    });
    bars.forEach(bar => observer.observe(bar));
};

// Form Validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value === '') {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
    });
};

// Typewriter Effect
const typewriter = (element, text, speed) => {
    let i = 0;
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

// Scroll Reveal Animation
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach(element => observer.observe(element));
};

// Lazy Loading
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => observer.observe(img));
};

// Counter Animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    let count = 0;
                    const target = +counter.dataset.target;
                    const speed = 200; // Change this value for speed
                    const increment = target / speed;
                    const animateCount = setInterval(() => {
                        count += increment;
                        counter.innerText = Math.floor(count);
                        if (count >= target) {
                            clearInterval(animateCount);
                            counter.innerText = target; 
                        }
                    }, 1);
                });
            }
        });
    });
    counters.forEach(counter => observer.observe(counter));
};

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    smoothScroll();
    animateSkillBars();
    
    const form = document.querySelector('form');
    if(form) {
        validateForm(form);
    }
    
    const typewriterElement = document.querySelector('.typewriter');
    if(typewriterElement) {
        typewriter(typewriterElement, "Welcome to my portfolio", 100);
    }
    
    revealOnScroll();
    lazyLoadImages();
    animateCounters();
});
