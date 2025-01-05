import {fetchWeatherData} from "./weatherApi";

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface ForecastDayData {
  time: string;
  temp_c: number;
  icon:  string;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    condition: WeatherCondition;
  };
}

export interface ForecastWeekData {
  forecastDay: string;
  forecastDayMaxTempC: number;
  forecastDayIcon: string;
}

export interface ForecastHourData {
  time: string;
  temp_c: number;
  condition:  WeatherCondition;
}

export async function getWeeklyWeatherData(city: string): Promise<ForecastWeekData[]> {
  const data = await fetchWeatherData(city);
  const forecastWeekData = data.forecast.forecastday;

  return forecastWeekData.map((day: ForecastDay) => {
    const forecastDayData: ForecastWeekData = {
      forecastDay: day.date,
      forecastDayMaxTempC: day.day.maxtemp_c,
      forecastDayIcon: day.day.condition.icon,
    };

    forecastDayData.forecastDay = new Date(forecastDayData.forecastDay).toLocaleString(
        "en-uk",
        {
          weekday: "short",
        }
    );

    return forecastDayData;
  });
}

// Hourly Weather:
export async function getHourlyWeatherData(city: string): Promise<ForecastDayData[]> {
  const data = await fetchWeatherData(city);

  const forecastHourlyData = data.forecast.forecastday[0].hour;

  return forecastHourlyData.map((hour: ForecastHourData ) => {

    const forecastDayData = {
      time: hour.time,
      temp_c: hour.temp_c,
      icon: hour.condition.icon,
    };

    const trimmedTime = forecastDayData.time.split(" ").slice(1).join(" ");

    forecastDayData.time = new Date(
        "1970-01-01T" + trimmedTime + "Z"
    ).toLocaleTimeString("en-uk", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
    });

    return forecastDayData;
  });
}

