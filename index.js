const api = {
    key: "fcb9e37c3c7c69bba9ab211b5f96aef9",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector("#search");
search.addEventListener("keypress", setQuery)

function setQuery(e) {
    if(e.keyCode == 13) {
        getWeather(search.value)
    }
}

function getWeather(q) {
    fetch(`${api.baseUrl}weather?q=${q}&units=metric&appid=${api.key}`)
    .then((weather) => {
        return weather.json()
    })
    .then((showResult))
}

function showResult(weather) {
    let country = document.querySelector(".location .city");
    country.innerHTML = `${weather.name}, ${weather.sys.country}`

    let newDate = new Date();
    let date = document.querySelector(".location .date");
    date.innerHTML = dateNow(newDate);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp_min)}<span>°C</span>`;

    let weatherElement = document.querySelector(".weather");
    weatherElement.innerHTML = weather.weather[0].main;

    let loToHigh = document.querySelector(".high-to-low");
    loToHigh.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`

}

function dateNow(s) {
    let months = [
        'Jenuary', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


