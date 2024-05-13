import { useEffect, useState } from "react";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const fetchedData = await getData();
        setWeatherData(fetchedData);
      } catch {
        Error("Weather request failed");
      }
    }

    fetchWeatherData();
  });

  return (
    <>
      <div className="homepage-header-container">
        <h2 className="weather-location">{city}</h2>
        <h2 className="weather-temp">
          {Math.round(weatherData?.currentTempC)}&deg;
        </h2>
        <p className="weather-conditions">{weatherData?.conditions}</p>
        <div className="weather-temp-high-low">
          <p className="weather-temp-high">
            H:{Math.round(weatherData?.maxTempC)}&deg;
          </p>
          <p className="weather-temp-low">
            L:{Math.round(weatherData?.minTempC)}&deg;
          </p>
        </div>
        <img
          className="house-graphic"
          src="/house-graphic.svg"
          alt="image of a house"
        />
      </div>
    </>
  );
}
