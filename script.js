// script.js: Interactive features for appointment booking form, contact form validation, mobile navigation toggle, testimonial carousel, and smooth scrolling

// Appointment Booking Form
function bookAppointment() {
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    alert(`Appointment booked for ${date} at ${time}`);
}

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return false;
    }
    alert('Form submitted successfully.');
    return true;
}

// Mobile Navigation Toggle
function toggleNavigation() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('active');
}

// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function previousSlide() {
    showSlide(currentSlide - 1);
}

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
}