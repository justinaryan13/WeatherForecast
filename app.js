const daily = document.getElementById('forecast');
const cityDisplay = document.getElementById(`city-display`);
const date = document.getElementById(`date`);
const temperature = document.getElementById(`temperature`);
const windSpeed = document.getElementById(`wind-speed`);
const cityName = document.getElementById(`city-name`);


const formattedDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('id-ID', options);
};

const formattedShortDate = (date) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('id-ID', options);
  };

    const getWeather = async (latitude, longitude) => {
    const WEATHER_URL = 
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,apparent_temperature_max&current=temperature_2m,wind_speed_10m,weather_code&start_date=2025-03-20&end_date=2025-03-26`;
    document.getElementById("loading").style.display = "block";

    const response = await fetch(WEATHER_URL);
    const data = await response.json();
    document.getElementById("loading").style.display = "none";

    date.innerText = formattedDate(data.current.time);
    temperature.innerText = data.current.temperature_2m + '°';
    windSpeed.innerText = data.current.wind_speed_10m + 'km/h';

    daily.innerHTML = '';

    for (let i = 1; i < data.daily.time.length; i++) {
        daily.innerHTML += `
        <div class="text">
                <span class="time">${formattedShortDate(data.daily.time[i])}</span>
                <img width="100px" src="${WMO[data.daily.weather_code[i]].day.image}" alt="">
                <span class="cond">${WMO[data.daily.weather_code[i]].day.description}</span>
                <br>
                <span class="temp">${data.daily.apparent_temperature_max[i]}&deg;C</span>
                </div>
         </div>
    </div>
    `;
    }
};


const getGeocoding = async () => {
    let name = cityName.value
    cityDisplay.innerText = name;

    const GEOCODING_URL =  `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`;

    const response = await fetch(GEOCODING_URL);
    const data = await response.json();

    let latitude = data.results[0].latitude;
    let longitude = data.results[0].longitude;

    getWeather(latitude, longitude);
};

const getLocation = () => {
    cityDisplay.innerText = 'Jakarta';

    navigator.geolocation.getCurrentPosition((postion) => {
        getWeather(postion.coords.latitude, postion.coords.longitude);
    });
};

getLocation();