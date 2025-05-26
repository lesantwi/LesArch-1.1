document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Toggle for Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Optional: Add styling for animated hamburger
        });
    }

    // --- Homepage Project Slider ---
    const projectSlider = document.querySelector('.project-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (projectSlider && prevBtn && nextBtn) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.project-slide');
        const totalSlides = slides.length;

        const showSlide = (index) => {
            if (index >= totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }
            projectSlider.style.transform = `translateX(-${slideIndex * 100}%)`;
        };

        prevBtn.addEventListener('click', () => {
            showSlide(slideIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(slideIndex + 1);
        });

        // Optional: Auto-play slider
        // setInterval(() => {
        //     showSlide(slideIndex + 1);
        // }, 5000); // Change slide every 5 seconds

        showSlide(0); // Initialize slider
    }

    // --- Homepage Animated Map Click ---
    const clickableMapArea = document.querySelector('.clickable-map-area');
    if (clickableMapArea) {
        clickableMapArea.addEventListener('click', () => {
            window.location.href = 'map.html'; // Redirect to the map page
        });
    }

    // --- Active Navbar Link Styling (Optional) ---
    const currentPath = window.location.pathname.split('/').pop(); // Get current page filename
    const navLinksList = document.querySelectorAll('.nav-links a');

    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure other links are not active
        }
    });
});