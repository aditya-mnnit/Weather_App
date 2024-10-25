const apiKey = "312abfd953c970ceaf81f671079f6e22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cities = ['delhi', 'mumbai', 'chennai', 'bengaluru', 'kolkata', 'hyderabad'];

async function checkWeather(){
  for(let i=0; i<6; i++){
    const response = await fetch(apiUrl + cities[i] + `&appid=${apiKey}`);
  
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      //variable data contains all weather information from apiUrl
      var data = await response.json(); //object that contains method for parsing values and convert values to JSON
  
      //queryselector returns first element within document that matches specified selector, if no matches are found null is returned
      //innerHTML = gets/sets HTML markup contained within the element
      //in this case it will search for the class city, select the h2 element and replace the city name
      document.querySelector("#"+cities[i]+"temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector("#"+cities[i]+"humidity").innerHTML = data.main.humidity + "%";
      document.querySelector("#"+cities[i]+"wind").innerHTML = data.wind.speed + "km/h";
    
    //   if(data.weather[0].main == "Clouds")
    //   {
    //     weatherIcon.src = src = "images/clouds.png";
    //   }
    //   else if(data.weather[0].main == "Clear"){
    //     weatherIcon.src = src = "images/clear.png";
    //   }
    //   else if(data.weather[0].main == "Rain"){
    //     weatherIcon.src = src = "images/rain.png";
    //   }
    //   else if(data.weather[0].main == "Drizzle"){
    //     weatherIcon.src = src = "images/drizzle.png";
    //   }
    //   else if(data.weather[0].main == "Mist"){
    //     weatherIcon.src = src = "images/mist.png";
    //   }
    //   else if(data.weather[0].main == "Snow"){
    //     weatherIcon.src = src = "images/snow.png";
    //   }
    //   else{
    //     weatherIcon.src = src = "images/wind.png";
    //   }
  
    //   document.querySelector(".weather").style.display = "block"; // block the display element -> display weather
    //   document.querySelector(".error").style.display = "none"; 
    }
  }
 
}

window.onload = checkWeather();