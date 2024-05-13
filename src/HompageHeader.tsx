import { useEffect, useState } from "react";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const fetchedData = await getData();
      setWeatherData(fetchedData);
    }

    fetchWeatherData();
  });

  return (
    <>
      <div className="homepage-header-container">
        <h2 className="weather-location">{city}</h2>
        <h2 className="weather-temp">{weatherData?.currentTempC}C</h2>
        <p className="weather-conditions">{weatherData?.conditions}</p>
        <div className="weather-temp-high-low">
          <p className="weather-temp-high">{weatherData?.maxTempC}</p>
          <p className="weather-temp-low">{weatherData?.minTempC}</p>
        </div>
      </div>
    </>
  );
}
