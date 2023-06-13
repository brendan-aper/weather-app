var button = document.querySelector('.button')
var newName = document.getElementById('cityInput');
var cityName = document.getElementById('cityName');
var iconsEl = document.querySelector('icons')
var cityButton = document.querySelector('.cityStorage');



button.addEventListener('click', function()
{cityName.innerHTML = newName.value;
getWeatherData();
localStorage.setItem("cityName",newName.value)

var cityStorage = document.createElement('button')
cityStorage.innerHTML = newName.value;

// cityStorage.style.display = "block"
cityStorage.style.margin = "2px"




cityButton.appendChild(cityStorage);
cityStorage.classList.add('btn')
cityStorage.classList.add('btn-primary')
cityStorage.style.marginLeft = "auto"
cityStorage.style.marginRight = "auto"
cityButton.style.display = "flex"
cityButton.style.flexDirection = "column"
cityButton.style.justifyContent = "center"
cityStorage.style.width = "30%";

var icons = document.querySelectorAll('.icons');
icons.forEach(function(icon) {
  icon.classList.add('bg-primary');
})

cityButton.addEventListener('click', function(){
  if (event.target.tagName === 'BUTTON') {
    newName.value = event.target.innerHTML;
    cityName.innerHTML = newName.value;
  getWeatherData()
}})

});



function getWeatherData() {
  
  
  

  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1efd263d108c37d3e44c050e6ab191ae&units=imperial')
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

.catch(err => alert("Something went wrong"))
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



