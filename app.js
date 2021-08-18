// Initialize and add the map
function initMap() {
    // The initial location
    const startPoint = { lat: 32.5885, lng: -95.2041 };
    // Generate map using startPoint as the center
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: startPoint,
    }); 
    // Generate marker at startPoint
    const marker = new google.maps.Marker({
        position: startPoint,
        map: map,
    });
}