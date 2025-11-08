document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle menu on hamburger click
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Function to close the menu
    const closeMenu = () => {
        if (mobileMenu && hamburger) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    };

    // Close menu when a link inside it is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        // Check if the click is outside the menu AND outside the hamburger button
        if (mobileMenu && hamburger) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        }
    });

});