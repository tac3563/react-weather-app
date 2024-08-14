import { useEffect, useState } from "react";

export default function HourlyForecast() {
  const [hourlyForecast, setHourlyForecast] = useState<
    ForecastDayData[] | null
  >(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const fetchedHourlyWeatherData = await getHourlyWeatherData();
        setHourlyForecast(fetchedHourlyWeatherData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <>
      <ul className="hourly-forecast-list">
        {hourlyForecast?.map((day, index) => (
          <li key={index}>
            <p id={`day-${index}`}>{day.time}</p>
            <img
              src={day.icon}
              alt={`Icon for ${day.icon}`}
              id={`day-${index}`}
            />
            <p id={`day-${index}`}>{day.tempC}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
