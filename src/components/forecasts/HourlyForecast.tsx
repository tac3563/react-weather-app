import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getHourlyWeatherData, ForecastDayData } from "../../data/forecastData.ts";
import {HomeProps} from "../Home.tsx";


export default function HourlyForecast({city}: HomeProps) {
  const [hourlyForecast, setHourlyForecast] = useState<
    ForecastDayData[] | null
  >(null);

  gsap.registerPlugin(useGSAP);


  useEffect(() => {
    async function fetchWeatherData(city: string) {
      try {
        const fetchedHourlyWeatherData = await getHourlyWeatherData(city);
        setHourlyForecast(fetchedHourlyWeatherData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData(city);
  }, []);

  let initialTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    hour12: true,
  });

  initialTime = initialTime.substring(1);

  return (
    <>
      <ul className="hourly-forecast-list">
        {hourlyForecast?.map((day, index) => (
          <li
            className={day.time === initialTime ? "active" : undefined}
            key={index}
          >
            <p className="forecast-time" id={`day-${index}`}>
              {day.time === initialTime ? "Now" : day.time}
            </p>
            <img
              src={day.icon}
              alt={`Icon for ${day.icon}`}
              id={`day-${index}`}
            />
            <p className="forecast-hour-max-temp" id={`day-${index}`}>
              {Math.round(day.temp_c)}
              <span>&deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
