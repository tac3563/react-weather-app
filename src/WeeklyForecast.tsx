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
            <p id={`day-${index}`}>{day.forecastDay}</p>
            <p id={`day-${index}`}>{day.forecastDayMaxTempC}</p>
            <img
              src={day.forecastDayIcon}
              alt={`Icon for ${day.forecastDay}`}
              id={`day-${index}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
