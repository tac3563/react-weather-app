import { useState } from "react";
import TabBar from "./TabBar";
import WeeklyForecast from "./WeeklyForecast";

export default function Modal() {
  const modalForecasts: string[] = ["hourly", "weekly"];

  const [activeForecast, setActiveForecast] = useState(modalForecasts[0]);

  const setHourlyForecast = () => {
    setActiveForecast(modalForecasts[0]);
  };

  const setWeeklyForecast = () => {
    setActiveForecast(modalForecasts[1]);
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <div className="hourly-forecast" onClick={setHourlyForecast}>
            Hourly Forecast
            {activeForecast === "hourly" && (
              <p>The hourly forecast is active</p>
            )}
          </div>
          <div className={"weekly-forecast"} onClick={setWeeklyForecast}>
            Weekly Forecast
            {activeForecast === "weekly" && <WeeklyForecast />}
          </div>
        </div>
        <div className="modal-forecast-widget"></div>
      </div>
      <TabBar />
    </>
  );
}
