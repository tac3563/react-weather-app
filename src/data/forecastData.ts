import { fetchWeatherData } from "./weatherApi";

export interface ForecastDayData {
  time: string;
  tempC: number;
  icon: string;
}

export interface ForecastWeekData {
  forecastDay: string;
  forecastDayMaxTempC: number;
  forecastDayIcon: string;
}

export async function getWeeklyWeatherData(city): Promise<ForecastWeekData[]> {
  const data = await fetchWeatherData(city);
  const forecastWeekData = data.forecast.forecastday;

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
export async function getHourlyWeatherData(city): Promise<ForecastDayData[]> {
  const data = await fetchWeatherData(city);

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

getHourlyWeatherData();
getWeeklyWeatherData();
