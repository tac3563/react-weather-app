import { useState } from "react";
import TabBar from "./TabBar";
import WeeklyForecast from "./WeeklyForecast";
import HourlyForecast from "./HourlyForecast";

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
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="hourly-forecast" onClick={setHourlyForecast}>
              Hourly Forecast
            </div>
            <div className={"weekly-forecast"} onClick={setWeeklyForecast}>
              Weekly Forecast
            </div>
          </div>
          <div className="modal-forecast-widget">
            {activeForecast === "hourly" && <HourlyForecast />}
            {activeForecast === "weekly" && <WeeklyForecast />}
          </div>
        </div>
      </div>
      <TabBar />
    </>
  );
}
