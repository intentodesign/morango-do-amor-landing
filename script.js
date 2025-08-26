// FAQ Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentNode;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('i');
            
            // Toggle the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close all other answers
                faqQuestions.forEach(otherQuestion => {
                    const otherItem = otherQuestion.parentNode;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('i');
                    otherAnswer.style.display = 'none';
                    otherIcon.style.transform = 'rotate(0deg)';
                });
                
                // Open current answer
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Initially hide all answers
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
});

// Smooth scrolling for anchor links
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

// Add scroll-triggered animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.problema-item, .beneficio-item, .oferta-box');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Add pulse effect to CTA buttons
function addPulseEffect() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s';
        });
        
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// CSS for pulse animation (added via JS)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

addPulseEffect();

// Track button clicks (for analytics if needed)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA Button clicked:', this.textContent.trim());
        
        // Add any tracking code here
        // Example: gtag('event', 'click', { 'event_category': 'CTA' });
    });
});

// Add loading animation for the page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add intersection observer for more sophisticated animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements for animation
    document.querySelectorAll('.problema-item, .beneficio-item, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Add floating effect to the hero image
function addFloatingEffect() {
    const heroImage = document.querySelector('.morango-image');
    if (heroImage) {
        let position = 0;
        setInterval(() => {
            position += 0.02;
            heroImage.style.transform = `translateY(${Math.sin(position) * 10}px)`;
        }, 50);
    }
}

addFloatingEffect();