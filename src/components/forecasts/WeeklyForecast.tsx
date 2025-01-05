import { useEffect, useState } from "react";
import { getWeeklyWeatherData, ForecastWeekData } from "../../data/forecastData.ts";
import {HomeProps} from "../Home.tsx";


export default function WeeklyForecast({city}: HomeProps) {
  const [weeklyForecast, setWeeklyForecast] = useState<
    ForecastWeekData[] | null
  >(null);

  useEffect(() => {
    async function fetchWeatherData(city: string) {
      try {
        const fetchedWeeklyWeatherData = await getWeeklyWeatherData(city);
        setWeeklyForecast(fetchedWeeklyWeatherData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData(city);
  }, []);

  return (
    <>
      <ul className="weekly-forecast-list">
        {weeklyForecast?.map((day, index) => (
          <li key={index}>
            <p className="forecast-day" id={`day-${index}`}>
              {day.forecastDay}
            </p>
            <img
              src={day.forecastDayIcon}
              alt={`Icon for ${day.forecastDay}`}
              id={`day-${index}`}
            />
            <p className="forecast-day-max-temp" id={`day-${index}`}>
              {Math.round(day.forecastDayMaxTempC)}
              <span>&deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
