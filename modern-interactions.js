// Modern Interactive Elements for Frontend Developer Portfolio

// Hero Content Fade-in Animation
function initHeroAnimations() {
    const heroElements = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.hero-description',
        '.hero-stats',
        '.hero-buttons',
        '.tech-stack'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}

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
    const duration = 4000 + (index * 1500); // Different speeds
    const amplitude = 30 + (index * 15);
    
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

// Tech Stack Icon Animations - Improved with subtle animations
function initTechStackAnimations() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        // Gentle hover animation
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.15) translateY(-3px)';
            icon.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.15)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) translateY(0)';
            icon.style.boxShadow = 'none';
        });
        
        // Gentle periodic animation
        setTimeout(() => {
            icon.style.transform = 'scale(1.05) translateY(-2px)';
            icon.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                icon.style.transform = 'scale(1) translateY(0)';
            }, 300);
        }, index * 800);
    });
}

// Staggered Hero Stats and Buttons Animation
function initHeroStaggeredAnimations() {
    // Animate stat items with stagger
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) scale(0.9)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
        }, 600 + (index * 150));
    });
    
    // Animate buttons with stagger
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(30px)';
        button.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
    
    // Add subtle hover effects to buttons
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
            button.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = 'none';
        });
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
    initHeroAnimations();
    initHeroStaggeredAnimations();
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
window.initHeroAnimations = initHeroAnimations;
window.initHeroStaggeredAnimations = initHeroStaggeredAnimations;
window.initTechStackAnimations = initTechStackAnimations;