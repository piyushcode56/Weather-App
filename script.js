const Api_key = "1e0a64e3c472bc628d8b6a9482f49f9a";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";


const cityName = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const weatherTemp = document.getElementById('weather-temp');
const weatherCity = document.getElementById('weather-city');
const humidityValue = document.getElementById('humidity-value');
const windValue = document.getElementById('wind-value');
const weatherImg = document.getElementById('weather-img');


window.addEventListener('load', ()=>{
    fetchData("mumbai");
})

async function fetchData(query) {
    const response = await fetch(`${url}${query}&appid=${Api_key}&units=metric`)
    const data = await response.json();
    console.log(data);

    weatherTemp.innerHTML = Math.round(data.main.temp) + "°c";
    weatherCity.innerHTML = data.name;
    humidityValue.innerHTML = data.main.humidity + " %";
    windValue.innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds") {
        weatherImg.src = "clouds.png"
    }
    else if(data.weather[0].main == "Mist") {
        weatherImg.src = "mist.png"
    } 
    else if(data.weather[0].main == "Rain") {
        weatherImg.src = "rain.png"
    }
    else if(data.weather[0].main == "Clear") {
        weatherImg.src = "clear.png"
    } 
    else if(data.weather[0].main == "Drizzle") {
        weatherImg.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Snow") {
        weatherImg.src = "snow.png"
    }
    
}



searchBtn.addEventListener('click', ()=>{
    const value = cityName.value;
    fetchData(value);
    cityName.value="";
})

