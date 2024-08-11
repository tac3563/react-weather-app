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

interface forecastWeekData {
  forecastDay: string;
  forcastDayMaxTempC: number;
  forecastDayIcon: string;
}

// Current Weather:
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

// Weekly Weather:
async function getWeeklyWeatherData() {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}&days=7`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }

  const data = await currentResponse.json();
  const forecastWeekData = data.forecast.forecastday;

  forecastWeekData.forEach((day) => {
    const forecastDayData: forecastWeekData = {
      forecastDay: day.date,
      forcastDayMaxTempC: day.day.maxtemp_c,
      forecastDayIcon: day.day.condition.icon,
    };
    console.log(forecastDayData);
  });

  return forecastWeekData;
}

// Hourly Weather:
async function getHourlyWeatherData(): Promise<ForecastDayData> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }

  const data = await currentResponse.json();

  const forecastDayData: ForecastDayData =
    data.forecast.forecastday[0].hour.map((hour) => ({
      time: hour.time,
      tempC: hour.temp_c,
      icon: hour.condition.icon,
    }));

  return forecastDayData;
}

getCurrentWeatherData();
getHourlyWeatherData();
getWeeklyWeatherData();
