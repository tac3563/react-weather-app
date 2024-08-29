export async function fetchWeatherData() {
  const weatherApiKey = "8ff15bcc1da04bcf811135607240505";
  const baseUrl = "https://api.weatherapi.com/v1";
  const forecastQuery = "forecast.json";
  const city = "Leicester";

  const response = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!response.ok) {
    throw new Error("Fetching weather data failed");
  }

  const data = await response.json();
  return data;
}
