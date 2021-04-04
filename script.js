mapboxgl.accessToken = 'pk.eyJ1IjoiamFzaHdhbiIsImEiOiJja214dXo5NjYwc3JzMm91dG45YnplaWloIn0.NCSpNz7uhma1RLQsgY7zAA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [140.098771, 35.26858],
    zoom: 8
});

var popup = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Landingsbaan Maebara, Japan'
);
var popup2 = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Landingsbaan Vizinga, Rusland'
);
var popup3 = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Landingsbaan Smith, Canada'
);
var popup4 = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Landingsbaan Baião, Brazilië'
);

var marker1 = new mapboxgl.Marker()
    .setLngLat([140.098771, 35.26858]) //Maebara
    .setPopup(popup)
    .addTo(map);
var marker2 = new mapboxgl.Marker()
    .setLngLat([50.653839, 61.088177]) //Vizinga
    .setPopup(popup2)
    .addTo(map);
var marker3 = new mapboxgl.Marker()
    .setLngLat([-114.33579, 55.274602]) //Smith
    .setPopup(popup3)
    .addTo(map);
var marker4 = new mapboxgl.Marker()
    .setLngLat([-50.29541, -3.206333]) //Baião
    .setPopup(popup4)
    .addTo(map);

document.getElementById('fly1').addEventListener('click', function () {
    map.flyTo({
        center: [140.098771, 35.26858], //Maebara
        essential: true
    });
});
document.getElementById('fly2').addEventListener('click', function () {
    map.flyTo({
        center: [50.653839, 61.088177], //Vizinga
        essential: true
    });
});
document.getElementById('fly3').addEventListener('click', function () {
    map.flyTo({
        center: [-114.33579, 55.274602], //Smith
        essential: true
    });
});
document.getElementById('fly4').addEventListener('click', function () {
    map.flyTo({
        center: [-50.29541, -3.206333], //Baião
        essential: true
    });
});


function Smith() {

    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var lat = '55.274602';
    var lon = '-114.33579';
    var unit = 'metric';
    var lang = 'nl';
    var apiKey = 'b4c9089f18934979c93eaee00b976e45';

    // construct request
    var request = url + '?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&lang=' + lang + '&appid=' + apiKey;

    // get current weather
    fetch(request)

        // parse response to JSON format
        .then(function (response) {
            return response.json();
        })

        // do something with response
        .then(function (response) {
            var naam = response.name;
            var type = response.weather[0].description;
            var temp = response.main.temp;
            var icon = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
            weersToestand = '<div class="weersToestand">';
            weersToestand += '<div class="icon"> <img src="' + icon + '"> </div>';
            weersToestand += '</div>';
            var weatherBox = document.getElementById('weather');
            weatherBox.innerHTML = naam + '<br>' + temp + '&#176;C <br>' + type + weersToestand;
        });
}

function Maebara() {

    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var lat = '35.26858';
    var lon = '140.098771';
    var unit = 'metric';
    var lang = 'nl';
    var apiKey = 'b4c9089f18934979c93eaee00b976e45';

    // construct request
    var request = url + '?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&lang=' + lang + '&appid=' + apiKey;

    // get current weather
    fetch(request)

        // parse response to JSON format
        .then(function (response) {
            return response.json();
        })

        // do something with response
        .then(function (response) {
            var naam = response.name;
            var type = response.weather[0].description;
            var temp = response.main.temp;
            var icon = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
            weersToestand = '<div class="weersToestand">';
            weersToestand += '<div class="icon"> <img src="' + icon + '"> </div>';
            weersToestand += '</div>';
            var weatherBox = document.getElementById('weather');
            weatherBox.innerHTML = naam + '<br>' + temp + '&#176;C <br>' + type + weersToestand;
        });
}

function Vizinga() {

    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var lat = '61.088177';
    var lon = '50.653839';
    var unit = 'metric';
    var lang = 'nl';
    var apiKey = 'b4c9089f18934979c93eaee00b976e45';

    // construct request
    var request = url + '?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&lang=' + lang + '&appid=' + apiKey;

    // get current weather
    fetch(request)

        // parse response to JSON format
        .then(function (response) {
            return response.json();
        })

        // do something with response
        .then(function (response) {
            var naam = response.name;
            var type = response.weather[0].description;
            var temp = response.main.temp;
            var icon = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
            weersToestand = '<div class="weersToestand">';
            weersToestand += '<div class="icon"> <img src="' + icon + '"> </div>';
            weersToestand += '</div>';
            var weatherBox = document.getElementById('weather');
            weatherBox.innerHTML = naam + '<br>' + temp + '&#176;C <br>' + type + weersToestand;
        });
}

function Baião() {

    var url = 'https://api.openweathermap.org/data/2.5/weather';
    var lat = '-3.206333';
    var lon = '-50.29541';
    var unit = 'metric';
    var lang = 'nl';
    var apiKey = 'b4c9089f18934979c93eaee00b976e45';

    // construct request
    var request = url + '?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&lang=' + lang + '&appid=' + apiKey;

    // get current weather
    fetch(request)

        // parse response to JSON format
        .then(function (response) {
            return response.json();
        })

        // do something with response
        .then(function (response) {
            var naam = response.name;
            var type = response.weather[0].description;
            var temp = response.main.temp;
            var icon = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
            weersToestand = '<div class="weersToestand">';
            weersToestand += '<div class="icon"> <img src="' + icon + '"> </div>';
            weersToestand += '</div>';
            var weatherBox = document.getElementById('weather');
            weatherBox.innerHTML = naam + '<br>' + temp + '&#176;C <br>' + type + weersToestand;
        });
}

Maebara();
document.getElementById('fly1').onclick = function () {
    Maebara();
}
document.getElementById('fly2').onclick = function () {
    Vizinga();
}
document.getElementById('fly3').onclick = function () {
    Smith();
}
document.getElementById('fly4').onclick = function () {
    Baião();
}