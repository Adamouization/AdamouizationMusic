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
            name: 'Bath',
            lat: 51.3751000,
            lng: -2.3617200
        }

    ];
    var center = {
        lat: 47.812,
        lng: 3.199
    };

    // create the map with initial settings
    var map = new google.maps.Map(document.getElementById('google_map'), {
        zoom: 5,
        center: center
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

/**
 * Creates a script DOM element to load the map.
 */
function loadGoogleMapsUrl() {
    var script = document.createElement('script'),
        googleMapsApiKey = getGoogleMapsApiKey();

    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey +'&callback=initMap';
    document.body.appendChild(script);
}

/**
 * Retrieves the google map api key from a txt file.
 * @returns {{fileContents: string, init: init}}
 */
function getGoogleMapsApiKey() {
    // todo - implement a way of reading from file
    // var GOOGLE_MAP_KEY = {
    //     fileContents: "None",
    //     init: function(){
    //         $.ajax({
    //             url: "/docs/google_maps_api_key.txt",
    //             async: false,
    //             success: function (data) {
    //                 debugger;
    //                 GOOGLE_MAP_KEY.fileContents = data;
    //             },
    //             error: function (msg) {
    //                 console.log(msg.status + " Google Maps API Key " + msg.statusText)
    //             }
    //         });
    //     }
    // };
    // console.log("api key: " + GOOGLE_MAP_KEY);
    // return GOOGLE_MAP_KEY;
    return "key_here";
}