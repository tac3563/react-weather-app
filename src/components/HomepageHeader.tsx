import { useEffect, useState } from "react";
import {
  getCurrentWeatherData,
  CurrentWeatherData,
} from "../data/currentWeatherData";
import StatusBar from "./StatusBar";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(
    null
  );

  //TODO: make the city variable dynamic
  const city = "Leicester";

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
          <StatusBar />
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
        </div>
      </header>
    </>
  );
}
