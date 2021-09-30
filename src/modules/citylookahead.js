const searchInput = document.querySelector('.test-input');
const dataList = document.getElementById('datalist');

export let cities;
export let countries;

fetch('../dist/cities.json')
  .then((response) => response.json())
  .then((data) => (cities = data));

fetch('../dist/countries.json')
  .then((response) => response.json())
  .then((data) => (countries = data));

document.querySelector('.test').addEventListener('click', (e) => {
  console.log();
});

function findMatches(wordToMatch, city) {
  return city.filter((place) => {
    if (place.name === null || place.country === null) {
      return false;
    }
    const regex = new RegExp(wordToMatch, 'gi');
    return place.name.match(regex) || place.country.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  matches.sort((a, b) => {
    return a.name - b.name;
  });
  matches.length = 11;
  dataList.innerHTML = '';
  matches.forEach((e) => {
    dataList.appendChild(addOption(e));
  });
}

function addOption(object) {
  let text;
  if (object.state === '') {
    text = `${object.name}, ${object.country}`;
  } else {
    text = `${object.name}, ${object.state}, ${object.country}`;
  }
  const option = document.createElement('option');
  option.setAttribute('data-value', object.id);
  option.innerText = text;

  return option;
}

searchInput.addEventListener('input', displayMatches);
