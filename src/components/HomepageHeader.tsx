import { useEffect, useState } from "react";
import {
  CurrentWeatherData, getCurrentWeatherData,
} from "../data/currentWeatherData";
import StatusBar from "./StatusBar";
import { useLocation } from "react-router-dom";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(
    null
  );

  const location = useLocation();
  const city = location.state?.city  ?? "Leicester";

  useEffect(() => {
    async function getWeatherData() {

      try {
        const fetchedData = await getCurrentWeatherData(city);
        setWeatherData(fetchedData);
      } catch (error) {
        console.error("Weather request failed", error);
      }
    }

    getWeatherData();
  }, [city]);

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
