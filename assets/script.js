// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
    initializeSkillBars();
    initializeNavigation();
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Theme Switcher Functions
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (!themeToggle) {
        console.error('Theme toggle button not found!');
        return;
    }

    // Apply theme toggle styles
    Object.assign(themeToggle.style, {
        outline: 'none',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        webkitTapHighlightColor: 'transparent',
        webkitUserSelect: 'none',
        userSelect: 'none'
    });
    themeToggle.setAttribute('tabindex', '-1');

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(body, themeToggle);
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(body, themeToggle);
    });
}

function updateThemeIcon(body, themeToggle) {
    themeToggle.innerHTML = body.classList.contains('dark') ? '☀️' : '🌙';
}

// Navigation Functions
function initializeNavigation() {
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Skills Animation Functions
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-level') || bar.style.width;
        bar.style.width = width;
    });
}