document.addEventListener('DOMContentLoaded', function () {
    // Get the form element and the location list container
    const form = document.getElementById('search-form');
    const locationList = document.getElementById('location-list');
    const orderPage = "./order.html"

    // Function to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form input values
        const medicine = document.getElementById('medicine').value;
        const location = document.getElementById('location').value;

        // Simulate fetching data from a server
        const locations = [
            { name: 'Universal Medical Store', address: '123 Main St, City', distance: '2 miles away',directionsLink:'https://g.co/kgs/KKBS8Rz' },
            // Add more mock data as needed
            { name: 'Neethi Medical Store', address: '456 Elm St, City', distance: '3.5 miles away',directionsLink:'https://g.co/kgs/1LkGTok' },
        ];

        
        
        locationList.innerHTML = '';

        // Populate the location list with the new data
        locations.forEach(locationData => {
            const div = document.createElement('div');
            div.className = 'bg-gray-100 p-2  rounded';
            div.innerHTML = `
                <h2 class=" font-semibold">${locationData.name}</h2>
                <p>${locationData.address}</p>
                <p>${locationData.distance}</p>
                <div class="mt-2">
                    <a href="${orderPage}" class="bg-blue-400 text-white px-4 py-2 rounded mr-2 inline-block">Order</a>
                    <a href="${locationData.directionsLink}" class="bg-green-400 text-white px-4 py-2 rounded inline-block">Directions</a>
                </div>
            `;
            locationList.appendChild(div);
        });
    });
});
