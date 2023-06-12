var button = document.querySelector('.button')
var newName = document.getElementById('cityInput');
var cityName = document.getElementById('cityName');

button.addEventListener('click', function(){

  cityName.innerHTML = "--" + newName.value + "--";


  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=428a656bc52befa45e2d283dcd56623c&units=imperial')
    .then(response => response.json())
    .then(data => {
      console.log(data)
  

    for (let i = 0; i < 5; i ++) {
      document.getElementById("day" + (i + 1) + "Temp").innerHTML ="Temperature: " + data['list'][i]['main']['temp'] + "°";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Humid").innerHTML ="Humidity " + data['list'][i]['main']['humidity'] + "%";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("img" + (i + 1)).src="https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";  
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)]};
})

// .catch(err => alert("Something went wrong"))
})

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
  if(day + d.getDay() > 6) {
    return day + d.getDay()-7;
  } else {
    return day + d.getDay();
  }
}