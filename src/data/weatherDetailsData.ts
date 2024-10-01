import { fetchWeatherData } from "./weatherApi";

interface WeatherDetailsHour {
  windMph: number;
  rainMm: number;
  feelsLike: number;
  windChill: number;
  humidity: number;
  visibilityKm: number;
  pressureIn: number;
}

interface WeatherDetailsDay {
  uvIndex: number;
  sunrise: number;
}

export async function getWeatherDetailsHourData() {
  const data = await fetchWeatherData();
  const forecastWeekData = data.forecast.forecastday[0].hour;

  const currentDate = new Date();
  const currentHour = currentDate.getHours().toString();

  forecastWeekData.map((forecast) => {
    forecast.time = forecast.time.match(/\s(\d{2})/)[1];
  });

  const currentForecastHour = forecastWeekData.filter(
    (forecast) => forecast.time === currentHour
  );

  const fetchedWeatherDetailsHourData = currentForecastHour.map((hour) => {
    const weatherDetailsHourData: WeatherDetailsHour = {
      windMph: hour.wind_mph,
      rainMm: hour.precip_mm,
      feelsLike: hour.feelslike_c,
      windChill: hour.windchill_c,
      humidity: hour.humidity,
      visibilityKm: hour.vis_km,
      pressureIn: hour.pressure_in,
    };

    return weatherDetailsHourData;
  });
  return fetchedWeatherDetailsHourData;
}

// Weather Details Day Data:
async function getWeatherDetailsDayData() {
  const data = await fetchWeatherData();
  const forecastWeekData = data.forecast.forecastday;

  const fetchedWeatherDetailsDayData = forecastWeekData.map((day) => {
    const weatherDetailsDayData: WeatherDetailsDay = {
      uvIndex: day.day.uv,
      sunrise: day.astro.sunrise,
    };

    return weatherDetailsDayData;
  });

  return fetchedWeatherDetailsDayData;
}

getWeatherDetailsHourData();
getWeatherDetailsDayData();
