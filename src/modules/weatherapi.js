const apiKey = '9284a5fa45d0baaa8a5c7166b862b744';

const fetchWeather = async (locationArray) => {
  let location;
  if (locationArray.length === 2) {
    location = `${locationArray[0]},${locationArray[1]}`;
  } else if (locationArray.length === 3) {
    location = `${locationArray[0]},${locationArray[1]}, ${locationArray[2]}`;
  } else {
    location = locationArray;
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
    {
      mode: 'cors',
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const weatherData = await response.json();
  return weatherData;
};

const randomFunction = () => {
  console.log('random function');
};

export { fetchWeather, randomFunction };
