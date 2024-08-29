import { useEffect, useState } from "react";
import {
  getCurrentWeatherData,
  CurrentWeatherData,
} from "../data/currentWeatherData";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(
    null
  );
  const [time, setTime] = useState("0");

  //TODO: make the city variable dynamic
  const city = "Leicester";

  function updateTime() {
    const initialTime = new Date()
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/AM|PM/, "");
    setTime(initialTime);
  }

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const fetchedData = await getCurrentWeatherData();
        setWeatherData(fetchedData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <>
      <header>
        <div className="homepage-header__wrapper">
          <div className="homepage-header__nav">
            <div className="current-time">{time}</div>
            <img
              src="/src\images\status-bar.svg"
              alt=""
              className="status-bar"
            />
          </div>
          <h2 className="weather-location">{city}</h2>
          <h2 className="weather-temp">
            {Math.round(weatherData?.currentTempC ?? 0)}
            <span>&deg;</span>
          </h2>
          <p className="weather-conditions">{weatherData?.conditions}</p>
          <div className="weather-temp-high-low">
            <p className="weatwwher-temp-high">
              H:{Math.round(weatherData?.maxTempC ?? 0)}&deg;
            </p>
            <p className="weather-temp-low">
              L:{Math.round(weatherData?.minTempC ?? 0)}&deg;
            </p>
          </div>
          <img
            className="house-graphic"
            src="/src/images/house-graphic.svg"
            alt="image of a house"
          />
        </div>
      </header>
    </>
  );
}
