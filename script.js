// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // Testimonial Slider
    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialCards = testimonialSlider.querySelectorAll('.testimonial-card');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentTestimonial = 0;
    
    // Hide all testimonials except the first one
    for (let i = 1; i < testimonialCards.length; i++) {
        testimonialCards[i].style.display = 'none';
    }
    
    function showTestimonial(index) {
        // Hide current testimonial
        testimonialCards[currentTestimonial].style.display = 'none';
        
        // Update current testimonial index
        currentTestimonial = index;
        
        // Show new testimonial
        testimonialCards[currentTestimonial].style.display = 'block';
    }
    
    prevButton.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) {
            newIndex = testimonialCards.length - 1;
        }
        showTestimonial(newIndex);
    });
    
    nextButton.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonialCards.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonialCards.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 8000);
    
    // Form Validation & Submission
    const contactForm = document.getElementById('contactForm');
    const consultationForm = document.getElementById('consultationForm');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Here you would typically send the data to your server
            // For demo purposes, let's simulate a successful submission
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            contactForm.reset();
        });
    }
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const business = document.getElementById('business').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Here you would typically send the data to your server
            // For demo purposes, let's simulate a successful submission
            alert(`Thank you, ${name}! Your consultation has been scheduled for ${date} at ${time}. We'll send a confirmation to ${email}.`);
            consultationForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form values
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send the data to your server
            // For demo purposes, let's simulate a successful submission
            alert(`Thank you! You've been subscribed to our newsletter with the email: ${email}.`);
            newsletterForm.reset();
        });
    }
    
    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .portfolio-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animated elements
    const elementsToAnimate = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .portfolio-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});