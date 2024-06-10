const apiKey = "03fce6f6e90b1d8f3bf84dbfa072b12a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector("#searchbtn");
const weatherIcon = document.querySelector(".weather-icon");
const themeIcon = document.getElementById("theme-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".lat").innerHTML = data.coord.lat;
    document.querySelector(".lon").innerHTML = data.coord.lon;
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png" ; 
        // document.body.style.backgroundImage = "url('images/clouds.webp')";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png" ; 
        // document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png" ; 
        // document.body.style.backgroundImage = "url('images/drizzle.jpg')";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png" ; 
        // document.body.style.backgroundImage = "url('images/mist.jpg')";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png" ; 
        // document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png" ; 
        // document.body.style.backgroundImage = "url('images/snow.jpg')";
    }

    document.querySelector(".weather").style.visibility = "visible";
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchCity.value);
})

document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        checkWeather(searchCity.value);
    }
})

themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        themeIcon.src = "images/sun.png";
    }else{
        themeIcon.src = "images/moon.png";
    }
})
