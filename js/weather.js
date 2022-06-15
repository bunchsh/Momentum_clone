const API_KEY = "e6fe00af7305bb2de411b2534a05ffbc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json().then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        const weather = data.weather[0].main;
        const name = data.name;

        weatherContainer.innterText = weather;
        city.innerText = name;
    }));
};

function onGeoError() {
    alert("Can't find you, No weather for you.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);