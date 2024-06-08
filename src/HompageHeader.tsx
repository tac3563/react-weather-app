import { useEffect, useState } from "react";

export default function HomepageHeader() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [time, setTime] = useState("N/A");

  function updateTime() {
    const initialTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(initialTime);
  }

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

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
      <header>
        <div className="homepage-header__wrapper">
          <div className="homepage-header__nav">
            <div className="current-time">{time}</div>
            <img
              src="/src\assets\status-bar.svg"
              alt=""
              className="status-bar"
            />
          </div>
          <h2 className="weather-location">{city}</h2>
          <h2 className="weather-temp">
            {Math.round(weatherData?.currentTempC ?? 0)}&deg;
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
            src="/house-graphic.svg"
            alt="image of a house"
          />
        </div>
      </header>
    </>
  );
}
