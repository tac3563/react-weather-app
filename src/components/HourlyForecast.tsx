import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getHourlyWeatherData, ForecastDayData } from "./../data/forecastData";

export default function HourlyForecast() {
  const [hourlyForecast, setHourlyForecast] = useState<
    ForecastDayData[] | null
  >(null);

  gsap.registerPlugin(useGSAP);

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
            <p className="forecast-time" id={`day-${index}`}>
              {day.time}
            </p>
            <img
              src={day.icon}
              alt={`Icon for ${day.icon}`}
              id={`day-${index}`}
            />
            <p className="forecast-hour-max-temp" id={`day-${index}`}>
              {Math.round(day.tempC)}
              <span>&deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
