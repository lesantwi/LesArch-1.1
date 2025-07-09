document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Toggle for Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    } else {
        console.warn('Hamburger or Navbar not found. Mobile navigation might not work.');
    }

    // --- Project Slider Functionality ---
    const projectSlider = document.querySelector('.project-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (projectSlider && prevBtn && nextBtn) {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.project-slide');
        const totalSlides = slides.length;

        function updateSlider() {
            // Calculate the offset to move the slider
            // Each slide takes 100% width, so transform by -currentIndex * 100%
            projectSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        // Optional: Auto-slide
        // setInterval(() => {
        //     currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        //     updateSlider();
        // }, 5000); // Change slide every 5 seconds

    } else {
        console.warn('Project slider elements not found. Slider functionality might be missing.');
    }

    // --- Active Navbar Link Highlighting ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Remove leading slash from path for comparison consistency
        const linkHref = link.getAttribute('href').replace(/^\//, '');
        const currentPathClean = currentPath.replace(/^\//, '');

        // Check if the link's href matches the current page's path
        // Special handling for index.html as it might be just "" or "/"
        if (linkHref === currentPathClean || (linkHref === 'index.html' && (currentPathClean === '' || currentPathClean === 'index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});