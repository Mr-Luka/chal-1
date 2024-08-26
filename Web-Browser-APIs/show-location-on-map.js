const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function(position){
    const lat = position.coords.latitude; // capturing my latitude
    const lng = position.coords.longitude; // capturing my longitude

    marker.setLatLng([lat, lng]).update(); // updating my lat and lng
    map.setView([lat, lng], 13); // showing on the map where we are, 13 is how zoomed in

    marker.bindPopup('<strong>Hello World</strong> <br> This is My location');
});