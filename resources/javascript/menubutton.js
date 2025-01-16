// Add overlay div to the body
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

function show_hide() {
    const nav = document.querySelector('.main-nav');
    const bars = document.getElementById('bars');
    const overlay = document.querySelector('.menu-overlay');
    
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close menu when clicking overlay
document.querySelector('.menu-overlay').addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    if (nav.classList.contains('active')) {
        show_hide();
    }
});

// Close menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.main-nav');
        if (nav.classList.contains('active')) {
            show_hide();
        }
    });
});