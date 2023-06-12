var button = document.querySelector('.button')
var newName = document.getElementById('cityInput');
var cityName = document.getElementById('cityName');



button.addEventListener('click', getWeatherData()
{cityName.innerHTML = newName.value;}
);

function getWeatherData() {
  
  
  

  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1efd263d108c37d3e44c050e6ab191ae')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      

    for (let i = 0; i < 5; i ++) {
      document.getElementById("day" + (i + 1) + "Temp").innerHTML ="Temperature: " + data['list'][i]['main']['temp'] + "°";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Humid").innerHTML ="Humidity: " + data['list'][i]['main']['humidity'] + "%";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Wind").innerHTML = "Windspeed: " + data['list'][i]['wind']['speed'] + "mph";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("img" + (i + 1)).src="https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";  
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)]};
})

// .catch(err => alert("Something went wrong"))
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
  if(day + d.getDay() > 6) {
    return day + d.getDay()-7;
  } else {
    return day + d.getDay();
  }
}

// Add an array to store the city names
var cities = [];

// Function to add a city name to the list
function addCityName(city) {
  cities.push(city);
  var cityNameElement = document.createElement("p");
  cityNameElement.innerText = city;
  cityNameElement.classList.add("city-name");
  cityNameElement.addEventListener("click", function() {
    getWeatherData(city);
  });
  document.body.appendChild(cityNameElement);
}