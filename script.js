// JavaScript Document

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Navbar scroll effect and active menu highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            
            // Navbar style on scroll
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Active menu highlighting
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });

        // Trigger scroll event on load to set initial active state
        window.dispatchEvent(new Event('scroll'));

        // Smooth scrolling for navigation links
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

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('Cmwuy7Tx9x31aSmo-'); // Your EmailJS Public Key

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const serviceID = 'service_rq4202t'; // Your EmailJS service ID
        const ownerTemplate = 'template_4iih35e'; // Template for your inbox
        const replyTemplate = 'template_oj4qwdf'; // Template for user auto-reply

        // Prepare form data
        const form = this;

        // Send to you
        emailjs.sendForm(serviceID, ownerTemplate, form)
            .then(() => {
                console.log('Owner notification sent');
            })
            .catch(err => console.error('Failed sending to owner:', err));

        // Send auto-reply to user
        emailjs.sendForm(serviceID, replyTemplate, form)
            .then(() => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch(err => alert('Failed to send auto-reply.'));
    });
});

        