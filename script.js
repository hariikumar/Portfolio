// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (dummy example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add code to handle form submission (e.g., send data to server)
    alert('Form submitted!');
});
