// TODO: Refactor separate api calls to reduce duplication between the two fetch functions:
const weatherApiKey = "8ff15bcc1da04bcf811135607240505";
const baseUrl = "https://api.weatherapi.com/v1";
const forecastQuery = "forecast.json";
const city = "Leicester";

interface CurrentWeatherData {
  currentTempC: number;
  minTempC: number;
  maxTempC: number;
  uvIndex: number;
  rainfall: number;
  conditions: string;
}

interface ForecastDayData {
  time: number;
  tempC: number;
  icon: string;
}

async function getCurrentWeatherData(): Promise<CurrentWeatherData> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }
  const data = await currentResponse.json();
  const currentWeatherData: CurrentWeatherData = {
    currentTempC: data.current.temp_c,
    minTempC: data.forecast.forecastday[0].day.mintemp_c,
    maxTempC: data.forecast.forecastday[0].day.maxtemp_c,
    uvIndex: data.forecast.forecastday[0].day.uv,
    rainfall: data.forecast.forecastday[0].day.totalprecip_mm,
    conditions: data.current.condition.text,
  };

  return currentWeatherData;
}

async function getCurrentWeatherData(): Promise<ForecastDayData> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }

  const data = await currentResponse.json();

  const forecastDayData: ForecastDayData[] =
    data.forecast.forecastday[0].hour.map((hour: any) => ({
      time: hour.time,
      tempC: hour.temp_c,
      icon: hour.condition.icon,
    }));

  console.log(forecastDayData);

  return forecastDayData;
}

getCurrentWeatherData();
getCurrentWeatherData();
