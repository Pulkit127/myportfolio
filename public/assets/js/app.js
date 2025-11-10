// Typing effect
const phrases = ['Laravel', 'NodeJS', 'API Integration', 'Full-Stack Development', 'Payment Integration'];
const typedEl = document.getElementById('typed');
let pIndex = 0, charIndex = 0, forward = true;

function stepTyping() {
    const current = phrases[pIndex];
    if (forward) {
        charIndex++;
        if (charIndex >= current.length) { forward = false; setTimeout(stepTyping, 900); return }
    } else {
        charIndex--;
        if (charIndex <= 0) { forward = true; pIndex = (pIndex + 1) % phrases.length }
    }
    typedEl.textContent = current.slice(0, charIndex);
    setTimeout(stepTyping, forward ? 90 : 40);
}
stepTyping();

// Mobile menu toggle
document.getElementById('burger').addEventListener('click', () => {
    const m = document.getElementById('mobileNav');
    m.classList.toggle('hidden');
});

// Simple reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0');
    })
}, { threshold: 0.15 });
document.querySelectorAll('section, article, .p-6').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
    observer.observe(el);
});

// Contact form handler (demo)
document.getElementById('contactForm').addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert('Thanks! Message sent (demo). Replace form action with a real endpoint to enable sending.');
    ev.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();