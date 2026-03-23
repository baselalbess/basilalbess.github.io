// 1. Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Save preference to local storage so it stays after refresh
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Check for saved theme on page load
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
}

// 2. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Select all cards and headers to animate
const hiddenElements = document.querySelectorAll('.card, header');
hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // Start them hidden
    observer.observe(el);
});