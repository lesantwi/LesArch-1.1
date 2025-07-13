document.addEventListener('DOMContentLoaded', () => {
    // --- Map Initialization ---
    const map = L.map('map').setView([20, 0], 2); // Centered globally, zoom level 2

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // --- Site Data (All Sites) ---
    // This array will hold all your archaeological site data
    // Ensure these image paths correctly point to files within your 'assets' folder
    const archaeologicalSites = [
        {
            id: 'pont-du-gard',
            name: 'Pont du Gard',
            coords: [43.9478, 4.5357],
            image: 'assets/project_thumb_point_du_gard.jpeg', // Confirmed path
            description: 'A magnificent ancient Roman aqueduct bridge in southern France.',
            link: 'site-detail.html' // Link to its detail page
        },
        {
            id: 'asuka-dera',
            name: 'Asuka Dera Temple',
            coords: [34.468, 135.827], // Approximate coordinates for Asuka, Japan
            image: 'assets/asuka-dera-view.jpg', // Updated to local image
            description: 'Japan\'s first full-fledged Buddhist temple, a pivotal site for early Japanese Buddhism.',
            link: 'asuka-dera-detail.html' // Link to its detail page
        },
        // Larabanga Mosque entry removed for now
        {
            id: 'petra',
            name: 'Petra: Al-Khazneh',
            coords: [30.3285, 35.4444],
            image: 'assets/project_thumb_upcoming1.jpeg', // Confirm this file exists
            description: 'The iconic Treasury of the ancient Nabataean city of Petra, Jordan.',
            link: '#' // Placeholder link, will be updated when Petra detail page is ready
        },
        {
            id: 'giza-pyramid',
            name: 'Great Pyramid of Giza',
            coords: [29.9792, 31.1342],
            image: 'assets/project1.jpeg', // Confirm this file exists
            description: 'The oldest and largest of the three pyramids in the Giza Necropolis.',
            link: '#' // Placeholder link
        },
        {
            id: 'colosseum',
            name: 'Roman Colosseum',
            coords: [41.8902, 12.4922],
            image: 'assets/mdl pb.jpg', // Using your uploaded 'mdl pb.jpg' as a placeholder
            description: 'An elliptical amphitheatre in the centre of the city of Rome, Italy.',
            link: '#' // Placeholder link
        },
        {
            id: 'machu-picchu',
            name: 'Machu Picchu',
            coords: [-13.1631, -72.5450],
            image: 'assets/project_thumb_upcoming1.jpeg', // Reusing another placeholder
            description: 'An ancient Inca citadel located in the Andes Mountains of Peru.',
            link: '#' // Placeholder link
        }
        // Add more sites here following the same structure, ensuring correct local image paths
    ];

    let currentMarkers = []; // To keep track of markers currently on the map

    // Function to add all markers to the map
    function addMarkers(sitesToDisplay) {
        // Clear existing markers first
        currentMarkers.forEach(marker => map.removeLayer(marker));
        currentMarkers = [];

        sitesToDisplay.forEach(site => {
            const marker = L.marker(site.coords).addTo(map);
            marker.siteData = site; // Attach site data to the marker object

            // Add click listener to show custom popup
            marker.on('click', function() {
                showSiteCard(this.siteData);
            });
            currentMarkers.push(marker);
        });
    }

    // Initial load: Add all sites to the map
    addMarkers(archaeologicalSites);

    // --- Custom Site Card Popup ---
    const siteCardPopup = document.getElementById('site-card-popup');
    const closeSiteCardBtn = document.getElementById('close-site-card');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupLink = document.getElementById('popup-link');

    function showSiteCard(site) {
        popupImage.src = site.image;
        popupTitle.textContent = site.name;
        popupDescription.textContent = site.description;
        popupLink.href = site.link; // Set the link for the "View Details" button
        siteCardPopup.style.display = 'block'; // Show the popup
    }

    closeSiteCardBtn.addEventListener('click', () => {
        siteCardPopup.style.display = 'none'; // Hide the popup
    });

    // --- Search Functionality ---
    const searchInput = document.getElementById('site-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    function filterMarkers() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSites = archaeologicalSites.filter(site =>
            site.name.toLowerCase().includes(searchTerm) ||
            site.description.toLowerCase().includes(searchTerm)
        );
        addMarkers(filteredSites); // Re-add only the filtered markers
        siteCardPopup.style.display = 'none'; // Hide popup on new search
    }

    searchInput.addEventListener('input', filterMarkers); // Live search as user types

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = ''; // Clear input
        addMarkers(archaeologicalSites); // Show all markers again
        siteCardPopup.style.display = 'none'; // Hide popup
    });

    // Optional: Center map on Pont du Gard initially if it's a key site
    // map.setView(archaeologicalSites[0].coords, 10); // Zoom level 10 for closer view
});