// http://api.weatherapi.com/v1/current.json?key=64f0f7c80dc84f1c959121602222912&q=Chennai&aqi=no


const searchField = document.querySelector('.search-location');
const form = document.querySelector('form');
const weatherField = document.querySelector('.weather');
const timeField = document.querySelector('.time');
const conditionField = document.querySelector('.condition');
const loacationField = document.querySelector('.location');
const img = document.querySelector('img');
const fahrenField = document.querySelector('.fahren');
const cloudField = document.querySelector('.cloud');
const humidityField = document.querySelector('.humidity');
const wind_kphField = document.querySelector('.wind_kph');
const wind_mphField = document.querySelector('.wind_mph');
const wind_dirField = document.querySelector('.wind_dir');
const dayField = document.querySelector('.day');

let target;


form.addEventListener('submit', fetchData);

const fetchWeather = async (targetLocation) => {
	let url = `http://api.weatherapi.com/v1/current.json?key=64f0f7c80dc84f1c959121602222912&q=${targetLocation}&aqi=no`

	const result = await fetch(url);

	const data = await result.json();

	let temp = data.current.temp_c;

	let location_name = data.location.name;

	let condition = data.current.condition.text;

	let time = data.location.localtime;

	let weatherImage = data.current.condition.icon;

	let temp_fahrenheit = data.current.temp_f;

	let is_day = data.current.is_day;

	let cloud = data.current.cloud;

	let humidity = data.current.humidity;

	let wind_kph = data.current.wind_kph;

	let wind_mph = data.current.wind_mph;		

	let wind_dir = data.current.wind_dir;	

	img.setAttribute('src','https://'+weatherImage);
	weatherField.innerText = temp;
	timeField.innerText = time;
	conditionField.innerText = condition;	
	loacationField.innerText = location_name;
	fahrenField.innerText = temp_fahrenheit;
	cloudField.innerText = cloud;
	wind_kphField.innerText = wind_kph;
	wind_mphField.innerText = wind_mph;
	wind_dirField.innerText = wind_dir;
	humidityField.innerText = humidity;	

	if (is_day === 1){
		dayField.innerText = "Day"
	}
	else{
		dayField.innerText = "Night"
	}

	console.log(data);
}

function fetchData(e) {
	e.preventDefault();

	target = searchField.value;

	fetchWeather(target);
}