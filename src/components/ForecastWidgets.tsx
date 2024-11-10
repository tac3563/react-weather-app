import TabBar from "./NavBar";
import WeeklyForecast from "./WeeklyForecast";
import HourlyForecast from "./HourlyForecast";

export default function ForecastWidgets() {
  return (
    <>
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="hourly-forecast-widget">
            <p className="hourly-forecast-conditions">
              Cloudy conditions from 1AM-9AM, with showers expected at 9AM.
            </p>
            <hr />
            <HourlyForecast />
          </div>
          <div className="weekly-forecast-widget">
            <WeeklyForecast />
          </div>
        </div>
      </div>
      <TabBar />
    </>
  );
}
