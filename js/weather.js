const API_KEY = "e6fe00af7305bb2de411b2534a05ffbc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lng);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};

function onGeoError() {
    alert("Can't find you, No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);