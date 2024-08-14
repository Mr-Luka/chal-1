/*   Syntax
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
*/
//      Get Current Position ()
function curSuccess(position) {
    const coords = position.coords;
    console.log(`Latitude: ${coords.latitude}`)
    console.log(`Longitude: ${coords.longitude}`)
    console.log(`Within: ${coords.accuracy} meters`)
}

function curError(error) {
    console.log(`Error: ${error.code} - ${error.message}`);
}

const options = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,  // Time to wait to stop trying for location
    maximumAge: 0 // Do not use a cached position
};


// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);
/*

GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1723653564545}
coords: 
GeolocationCoordinates {latitude: 41.3892544, longitude: 2.1568224, altitude: null, accuracy: 13.256, altitudeAccuracy: null, …}
timestamp: 1723653564545
[[Prototype]]: 
GeolocationPosition
*/




//      WATCH POSITION  .watchPosition()
// Its gonna fire off when our position/location changes

const target = {
    latitude: 41.3874387,
    longitude: -71.394839
}

function watchSuccess(position) {
    const coords = position.coords;
    console.log(coords)

    if(target.latitude === coords.latitude && 
        target.longitude === coords.longitude) {
        console.log('You have reached your destination!');
        navigator.geolocation.clearWatch(id);
    } 
}

function watchError(error) {
    console.log(`Error: ${error.code} - ${error.message}`);
}

const watchOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,  // Time to wait to stop trying for location
    maximumAge: 0 // Do not use a cached position
};


const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);