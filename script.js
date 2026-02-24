/* ===================================================
   Academic Portfolio – Script
   Smooth scroll, theme toggle, scroll animations, mobile nav
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Theme Toggle ----------
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');

    if (saved) {
        html.setAttribute('data-theme', saved);
        themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    // ---------- Scroll Animations (IntersectionObserver) ----------
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach((el) => observer.observe(el));

    // ---------- Mobile Hamburger Menu ----------
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        // Animate hamburger lines
        hamburger.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // ---------- Active Nav Link on Scroll ----------
    const sections = document.querySelectorAll('.section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    const highlightNav = () => {
        const scrollY = window.scrollY + 100;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navAnchors.forEach((a) => a.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
});
