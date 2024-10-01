import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherDetailsHourData } from "../data/weatherDetailsData";
import HomepageHeader from "./HompageHeader";

export default function WeatherDetails() {
  const [hourlyWeatherDetails, setHourWeatherDetails] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const fetchedHourData = await getWeatherDetailsHourData();
        setHourWeatherDetails(fetchedHourData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData();
  }, []);

  const weatherData = hourlyWeatherDetails[0] || {};

  return (
    <div className="app-content-container">
      <div className="weather-details-bg-wrapper"></div>
      <div className="weather-details-container">
        <HomepageHeader />
        <Link className="weather-details-router" to="/">
          <p>{`< Weather`}</p>
        </Link>

        <div className="weather-details">
          <div className="feels-like">
            <h2>{weatherData.feelsLike}</h2>
            <p>Similar to the actual temperature</p>
          </div>
          <div className="wind-chill">
            <h2>{weatherData.windChill}</h2>
            <p>Moderate</p>
          </div>
          <div className="humidity">
            <h2>{weatherData.humidity}</h2>
          </div>
          <div className="pressure">
            <h2>{weatherData.pressureIn}</h2>
          </div>
          <div className="rain">
            <h2>{weatherData.rainMm}</h2>
          </div>
          <div className="visibility">
            <h2>{weatherData.visibilityKm}</h2>
          </div>
          <div className="wind-speed">
            <h2>{weatherData.windMph}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
