import { useEffect, useState } from "react";

export default function WeeklyForecast() {
  const [weeklyForecast, setWeeklyForecast] = useState<
    ForecastWeekData[] | null
  >(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const fetchedWeeklyWeatherData = await getWeeklyWeatherData();
        setWeeklyForecast(fetchedWeeklyWeatherData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData();
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
