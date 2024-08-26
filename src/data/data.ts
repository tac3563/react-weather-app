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
  time: string;
  tempC: number;
  icon: string;
}

interface ForecastWeekData {
  forecastDay: string;
  forecastDayMaxTempC: number;
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
async function getWeeklyWeatherData(): Promise<ForecastWeekData[]> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}&days=7`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }

  const data = await currentResponse.json();
  const forecastWeekData = data.forecast.forecastday;

  console.log(forecastWeekData);

  const weeklyData = forecastWeekData.map((day) => {
    const forecastDayData: ForecastWeekData = {
      forecastDay: day.date,
      forecastDayMaxTempC: day.day.maxtemp_c,
      forecastDayIcon: day.day.condition.icon,
    };

    const convertedDate = new Date(forecastDayData.forecastDay).toLocaleString(
      "en-uk",
      {
        weekday: "short",
      }
    );

    forecastDayData.forecastDay = convertedDate;

    return forecastDayData;
  });

  return weeklyData;
}

// Hourly Weather:
async function getHourlyWeatherData(): Promise<ForecastDayData[]> {
  const currentResponse = await fetch(
    `${baseUrl}/${forecastQuery}?key=${weatherApiKey}&q=${city}`
  );

  if (!currentResponse.ok) {
    throw new Error("fetching weather data failed");
  }

  const data = await currentResponse.json();

  const forecastHourlyData = data.forecast.forecastday[0].hour;

  const hourlyData = forecastHourlyData.map((hour) => {
    const forecastDayData: ForecastDayData = {
      time: hour.time,
      tempC: hour.temp_c,
      icon: hour.condition.icon,
    };

    const trimmedTime = forecastDayData.time.split(" ").slice(1).join(" ");

    const convertedTime = new Date(
      "1970-01-01T" + trimmedTime + "Z"
    ).toLocaleTimeString("en-uk", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
    });

    forecastDayData.time = convertedTime;

    return forecastDayData;
  });

  return hourlyData;
}

getCurrentWeatherData();
getHourlyWeatherData();
getWeeklyWeatherData();
