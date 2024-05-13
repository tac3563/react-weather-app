// API Key:
const weatherApiKey: string = "8ff15bcc1da04bcf811135607240505";
const baseUrl = "https://api.weatherapi.com/v1";
const forecastQuery = "forecast.json";
const city = "London";

interface WeatherData {
  currentTempC: number;
  minTempC: number;
  maxTempC: number;
  uvIndex: number;
  rainfall: number;
  conditions: string;
}
async function getData(): Promise<WeatherData> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }
  const data = await currentResponse.json();

  const weatherData = {
    currentTempC: data.current.temp_c,
    minTempC: data.forecast.forecastday[0].day.mintemp_c,
    maxTempC: data.forecast.forecastday[0].day.maxtemp_c,
    uvIndex: data.forecast.forecastday[0].day.uv,
    rainfall: data.forecast.forecastday[0].day.totalprecip_mm,
    conditions: data.current.condition.text,
  };

  return weatherData;
}

getData();
