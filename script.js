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

    } else {
        console.warn('Project slider elements not found. Slider functionality might be missing.');
    }

    // --- Active Navbar Link Highlighting ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').replace(/^\//, '');
        const currentPathClean = currentPath.replace(/^\//, '');

        if (linkHref === currentPathClean || (linkHref === 'index.html' && (currentPathClean === '' || currentPathClean === 'index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Form Submission Handling (Contact Form) ---
    const contactForm = document.getElementById('contactForm');
    const contactMessageDiv = document.getElementById('contactMessage');

    if (contactForm && contactMessageDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Simple validation
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                displayMessage(contactMessageDiv, 'Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                displayMessage(contactMessageDiv, 'Please enter a valid email address.', 'error');
                return;
            }

            // Simulate successful submission
            displayMessage(contactMessageDiv, 'Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset(); // Clear the form
        });
    }

    // --- Form Submission Handling (Model Submission Form) ---
    const modelSubmitForm = document.getElementById('modelSubmitForm');
    const modelMessageDiv = document.getElementById('modelMessage');

    if (modelSubmitForm && modelMessageDiv) {
        modelSubmitForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Simple validation
            const modelName = document.getElementById('model-name').value.trim();
            const yourName = document.getElementById('your-name').value.trim();
            const yourEmail = document.getElementById('your-email').value.trim();
            const modelFile = document.getElementById('model-file').files[0]; // Get the file object

            if (!modelName || !yourName || !yourEmail) {
                displayMessage(modelMessageDiv, 'Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(yourEmail)) {
                displayMessage(modelMessageDiv, 'Please enter a valid email address.', 'error');
                return;
            }

            if (!modelFile) {
                displayMessage(modelMessageDiv, 'Please upload a model file.', 'error');
                return;
            }

            // Simulate successful submission
            displayMessage(modelMessageDiv, 'Thank you for your submission! We will review your model.', 'success');
            modelSubmitForm.reset(); // Clear the form
        });
    }

    // Helper function to display messages
    function displayMessage(element, message, type) {
        element.textContent = message;
        element.className = `form-message ${type}`; // Add type class (success/error)
        element.style.display = 'block'; // Show the message

        // Automatically hide message after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
            element.textContent = '';
            element.className = 'form-message';
        }, 5000);
    }

    // Helper function for email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // --- Dynamic "Did You Know?" Facts ---
    const factTextElement = document.querySelector('.fact-section p');
    const facts = [
        "The Pont du Gard, part of a 50 km (31 mi) aqueduct, supplied fresh water to the Roman city of Nîmes. Built in the 1st century AD, it stands 48.8 meters (160 ft) high and is a masterpiece of ancient engineering.",
        "The Great Pyramid of Giza, built for Pharaoh Khufu, was the tallest man-made structure in the world for over 3,800 years.",
        "Petra, known as the 'Rose City', is famous for its rock-cut architecture and water conduit system. It was established as early as 312 BC as the capital city of the Nabataeans.",
        "The Roman Colosseum could hold an estimated 50,000 to 80,000 spectators and was used for gladiatorial contests and public spectacles.",
        "Machu Picchu is believed to have been a royal estate or sacred religious site for Inca leaders, built around 1450 AD and abandoned a century later during the Spanish conquest."
    ];
    let currentFactIndex = 0;

    function updateFact() {
        if (factTextElement) {
            factTextElement.textContent = facts[currentFactIndex];
            currentFactIndex = (currentFactIndex + 1) % facts.length;
        }
    }

    // Initial fact display
    updateFact();

    // Change fact every 10 seconds
    setInterval(updateFact, 10000);
});