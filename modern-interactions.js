// Modern Interactive Elements for Frontend Developer Portfolio

// Floating Elements Animation
function initFloatingElements() {
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    floatingShapes.forEach((shape, index) => {
        // Random initial position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        shape.style.left = randomX + 'px';
        shape.style.top = randomY + 'px';
        
        // Animate floating movement
        animateFloating(shape, index);
    });
}

function animateFloating(element, index) {
    const duration = 3000 + (index * 1000); // Different speeds
    const amplitude = 50 + (index * 20);
    
    function float() {
        const currentX = parseFloat(element.style.left);
        const currentY = parseFloat(element.style.top);
        
        const newX = currentX + (Math.sin(Date.now() / duration) * amplitude);
        const newY = currentY + (Math.cos(Date.now() / duration) * amplitude);
        
        element.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`;
        
        requestAnimationFrame(float);
    }
    
    float();
}

// Advanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for child elements
                const children = entry.target.querySelectorAll('.stagger-animation');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.fade-in-up, .skill-card, .specialty-item, .stat-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effects
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Hero background animation
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroOffset = scrolled * 0.3;
            hero.style.transform = `translateY(${heroOffset}px)`;
        }
    });
}

// Custom Cursor Effects
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateCursor() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .tech-icon, .skill-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
}

// Tech Stack Icon Animations
function initTechStackAnimations() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Hover animation
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Periodic pulse animation
        setTimeout(() => {
            icon.classList.add('pulse');
            setTimeout(() => {
                icon.classList.remove('pulse');
            }, 1000);
        }, index * 500);
    });
}

// Code Preview Typing Effect
function initCodeTypingEffect() {
    const codeLines = document.querySelectorAll('.code-line .code-text');
    
    codeLines.forEach((line, index) => {
        const text = line.innerHTML;
        line.innerHTML = '';
        
        setTimeout(() => {
            typeText(line, text, 50);
        }, index * 800);
    });
}

function typeText(element, text, speed) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Skill Progress Animation
function animateSkillProgress() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 500);
    });
}

// Smooth Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Add transition effect
                document.body.classList.add('page-transitioning');
                
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    setTimeout(() => {
                        document.body.classList.remove('page-transitioning');
                    }, 500);
                }, 100);
            }
        });
    });
}

// Initialize all modern interactions
document.addEventListener('DOMContentLoaded', () => {
    initTechStackAnimations();
    initCodeTypingEffect();
    initPageTransitions();
    
    // Delayed animations
    setTimeout(() => {
        animateSkillProgress();
    }, 1000);
});

// Export functions for use in main script
window.initFloatingElements = initFloatingElements;
window.initScrollAnimations = initScrollAnimations;
window.initParallaxEffects = initParallaxEffects;
window.initCursorEffects = initCursorEffects;