let fetchResults;
//Call to trueway-places for places nearby information - URL is meant to be dynamic to change based on location
fetch(`https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${startPoint.lat}%2C${startPoint.lng}&language=en&radius=10000&type=cinema`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trueway-places.p.rapidapi.com",
		"x-rapidapi-key": "8c720e6cc4msh7784b8c6cfb215ap1a0fc7jsn74c59d877df8"
	}
})
//Response information to JSON format
.then(response => {
    return response.json();
})
//Then formatted JSON data to only the "results" portion of the data
.then(data => {
    fetchResults = data.results;
    console.log(fetchResults);
})
.catch(err => {
	console.error(err);
});


//Example Test Object of what is returned
// {
//     "results" [
//         {
//             "id": "540F115D45DA349253F525824DE9D7F1",
//             "name": "Home Tyler",
//             "address": "Tyler, TX 75702, USA",
//             "location": {
//                 "lat": 32.351246,
//                 "lng": -95.301063
//             },
//             "types": [
//                 "cinema"
//             ],
//             "distance": 7
//         }
//     ]
// }

// Initialize and add the map
const startPoint = { lat: 32.351246, lng: -95.301063 };
function initMap() {
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
