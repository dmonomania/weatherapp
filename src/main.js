import fitty from 'fitty';
import { randomFunction, fetchWeather } from './modules/weatherapi';
import './modules/citylookahead';
import './styles/mainstyles.css';

import { cities, countries } from './modules/citylookahead';

let weatherData;

const form = document.querySelector('.form');
const weatherDiv = document.querySelector('.weather');

// html elements to fill in
const weatherText = document.querySelector('#weather-text p');
const weatherCity = document.querySelector('#weather-city p');
const weatherCountry = document.querySelector('#weather-country p');
const weatherTemp = document.querySelector('#weather-temp p');
const weatherFeels = document.querySelector('#weather-feels p');
const weatherWind = document.querySelector('#weather-wind p');
const weatherHumidity = document.querySelector('#weather-rain p');

fitty(weatherCity, { maxSize: 100 });
fitty(weatherCountry, { maxSize: 200 });

function weatherObjectCreator(param) {
  const object = {
    weather: param.weather,
    location: param.name,
    wind: param.wind,
    main: param.main,
    cloud: param.clouds,
    country: param.sys.country,
    humidity: param.main.humidity,
  };

  return object;
}

function printWeather(weather) {
  function updateCountry() {
    const countryname = countries.find((e) => e['alpha-2'] === weather.country);
    return countryname.name;
  }

  weatherCity.innerText = weather.location;
  weatherText.innerText = weather.weather[0].description;
  weatherCountry.innerText = updateCountry();
  weatherTemp.innerText = Math.trunc(weather.main.temp);
  weatherFeels.innerText = `Feels like: ${weather.main.feels_like}`;
  weatherWind.innerText = `Wind: ${weather.wind.speed} km/h`;
  weatherHumidity.innerText = `Humidity: ${weather.humidity}`;
}
function handleSubmit(event) {
  event.preventDefault();
  const inputValueArray = event.path[0][0].value.split(', ');
  fetchWeather(inputValueArray)
    .then((data) => {
      weatherData = weatherObjectCreator(data);
      console.log(weatherData);
      printWeather(weatherData);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

form.addEventListener('submit', handleSubmit);
