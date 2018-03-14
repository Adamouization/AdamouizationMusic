/**
 * Creates a Google Map map and adds markers on it.
 */
function initMap() {

    // map locations
    var locations = [
        {
            name: 'Monaco',
            lat: 43.734,
            lng: 7.421
        },
        {
            name: 'Bicester',
            lat: 51.8999800,
            lng: -1.1535700
        }

    ];
    var center = {
        lat: 47.812,
        lng: 5.199
    };

    // create the map with initial settings
    var map = new google.maps.Map(document.getElementById('google_map_monaco'), {
        zoom: 5,
        center: center,
        mapTypeId: 'hybrid'
    });

    // create and place the markers on the map
    var marker;
    locations.forEach(function (pos) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(pos.lat, pos.lng),
            map: map
        });
        google.maps.event.addListener(marker, 'click', function (marker, pos) {
            return function () {
                infowindow.setContent(pos.name);
                infowindow.open(map, marker);
            }
        })
    });
}