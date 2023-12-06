// Variaveis de seleção de elementos:

const WeatherAPIKey = "d6296017206684a56d342663e600b185";

const cityInput = document.querySelector('#city-input');
const searchBTN = document.querySelector('#search');

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const DescElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");
const weatherContainer = document.querySelector("#weather-data");

//Funções
const getWeatherData = async(city) =>{
  const WeatherApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPIKey}&units=metric&lang=pt_br` //URL para da api para ser acessada

  const res = await fetch(WeatherApiURL); //pega resposta da URL


  const data = await res.json(); //transforma o arquivo json recebido para transformar em objeto javascript

  console.log(data); //para ver o objeto no console

  return data  

};


const showWeatherData = async (city) =>{
  
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  DescElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src", 
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    )
  countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png` );
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}Km/h`;

  weatherContainer.classList.remove("hide");
};


//Eventos
searchBTN.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;
  
  showWeatherData(city);
  
});

cityInput.addEventListener("keyup", (e) =>{

  if(e.code === "Enter"){
    const city = e.target.value

    showWeatherData(city);
  }
});