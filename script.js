//Double check that the script is linked properly
console.log("Hello World!");

//JavaScript Code for slideshow
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.forEach(slide => slide.classList.remove('active'));
    const activeSlide = slides[slideIndex - 1];
    activeSlide.classList.add('active');
    activeSlide.classList.remove('fade');
    void activeSlide.offsetWidth; // Trigger reflow
}

//JavaScript for API on weather information 
//Sending API requests using async/await
async function getWeatherInfo() {
  const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=39.73&lon=-90.23&exclude=minutely,hourly,daily,alerts&appid=89be7347dc28111fd85e4f4987994e48");
  const data = await response.json();
  
  //Retrieve data from API
  const temp = data.current.temp;
  const description = data.current.weather[0].description;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_speed;

  // Update the DOM with weather info
    const output = document.getElementById("weather-container"); 
    output.innerHTML = `
      <div class="col-12 text-center">
        <h3>Jacksonville, IL Weather</h3>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      </div>
    `;
}

const button = document.getElementById('fetch-weather-btn');
button.addEventListener('click', function() {
    getWeatherInfo();
});
