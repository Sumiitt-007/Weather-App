  const apiKey = "5e4ff8d5954da438a44b8371609122fe";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const searchBox = document.querySelector(".input");
  const searchBtn = document.querySelector(".search");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    const element = data.weather[0].main;
    if(element === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(element === "Clear"){
      weatherIcon.src = "images/clear.png";
    }
    else if(element === "Rain"){
      weatherIcon.src = "images/rain.png";
    }
    else if(element === "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
    }
    else if(element === "Mist"){
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
  }
  searchBtn.addEventListener('click',() => {
    checkWeather(searchBox.value);
  })

  