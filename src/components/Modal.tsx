import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TabBar from "./TabBar";
import WeeklyForecast from "./WeeklyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Modal() {
  const modalForecasts = ["hourly", "weekly"];
  const [activeForecast, setActiveForecast] = useState(modalForecasts[0]);
  const forecastRef = useRef(null);

  const setHourlyForecast = () => {
    setActiveForecast(modalForecasts[0]);
  };

  const setWeeklyForecast = () => {
    setActiveForecast(modalForecasts[1]);
  };

  useGSAP(() => {
    const forecastEl = forecastRef.current;

    gsap.fromTo(
      forecastEl,
      { x: activeForecast === "hourly" ? "-100%" : "100%" },
      { x: "0%", duration: 0.2, easeInOut: "power3.out" }
    );
  }, [activeForecast]);

  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="hourly-forecast" onClick={setHourlyForecast}>
              Hourly Forecast
            </div>
            <div className="weekly-forecast" onClick={setWeeklyForecast}>
              Weekly Forecast
            </div>
          </div>
          <div className="modal-forecast-widget" ref={forecastRef}>
            {activeForecast === "hourly" && <HourlyForecast />}
            {activeForecast === "weekly" && <WeeklyForecast />}
          </div>
        </div>
      </div>
      <TabBar />
    </>
  );
}
