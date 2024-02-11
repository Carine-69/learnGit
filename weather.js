function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);

  let city = response.data.city;
  let country = response.data.country;
  let description = response.data.condition.description;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `The temperature in ${city}, ${country} is ${temperature}ºF (${description}).`;
}

let city = "Kigali";
let apiKey = "78o1309884534590dt047b4a23f7d6b9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
