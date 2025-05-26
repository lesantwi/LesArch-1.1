document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the Map
    // Ensure the 'map' div has a defined height in your CSS for it to be visible
    const map = L.map('map').setView([45.0, 3.0], 5); // Centered roughly on France, zoom level 5

    // 2. Add a Tile Layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. Define Site Data
    const archaeologicalSites = [
        {
            name: "Le Pont du Gard",
            lat: 43.9478,
            lng: 4.5358,
            imageUrl: "assets/project_thumb_pont_du_gard.jpg", // Use the actual path to your image
            description: "An ancient Roman aqueduct bridge that crosses the Gardon River in southern France.",
            link: "site-detail.html" // Link to the detail page
        },
        {
            name: "New Upcoming Site", // Placeholder for another site
            lat: 40.7128, // Example coordinates (New York City)
            lng: -74.0060,
            imageUrl: "assets/project_thumb_upcoming1.jpeg",
            description: "Exciting new discoveries are underway at this promising location.",
            link: "#" // No specific detail page yet
        },
        {
            name: "Accomplished Site", // Placeholder for another site
            lat: 51.5074, // Example coordinates (London)
            lng: -0.1278,
            imageUrl: "assets/project_thumb_accomplished1.jpeg",
            description: "A recently completed excavation revealing significant historical insights.",
            link: "#" // No specific detail page yet
        }
    ];

    // 4. Add Markers and Popups
    const siteCardPopup = document.getElementById('site-card-popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupLink = document.getElementById('popup-link');
    const closePopupButton = document.getElementById('close-popup-btn');

    archaeologicalSites.forEach(site => {
        const marker = L.marker([site.lat, site.lng]).addTo(map);

        marker.on('click', () => {
            popupImage.src = site.imageUrl;
            popupTitle.textContent = site.name;
            popupDescription.textContent = site.description;
            popupLink.href = site.link;
            siteCardPopup.style.display = 'block'; // Show the custom popup
        });
    });

    closePopupButton.addEventListener('click', () => {
        siteCardPopup.style.display = 'none'; // Hide the custom popup
    });

    // 5. Adjust map height (make sure it's defined in style.css!)
    // Add this to your style.css if you haven't already:
    // #map {
    //     height: 600px; /* Or any desired height */
    //     width: 100%;
    //     z-index: 1; /* Ensure map is below popups */
    // }
    // .site-card-popup {
    //     position: absolute;
    //     bottom: 20px; /* Adjust as needed */
    //     left: 50%;
    //     transform: translateX(-50%);
    //     background-color: white;
    //     padding: 15px;
    //     border-radius: 8px;
    //     box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    //     z-index: 1000; /* Ensure popup is above map */
    //     display: none; /* Hidden by default */
    //     width: 300px; /* Or preferred width */
    //     text-align: center;
    // }
    // .site-card-popup img {
    //     max-width: 100%;
    //     height: auto;
    //     border-radius: 4px;
    //     margin-bottom: 10px;
    // }
    // .site-card-popup h3 {
    //     margin-top: 0;
    //     color: #333;
    // }
    // .site-card-popup p {
    //     font-size: 0.9em;
    //     color: #666;
    //     margin-bottom: 15px;
    // }
    // .site-card-popup .close-btn {
    //     position: absolute;
    //     top: 10px;
    //     right: 10px;
    //     background: none;
    //     border: none;
    //     font-size: 1.5em;
    //     cursor: pointer;
    //     color: #888;
    // }
});