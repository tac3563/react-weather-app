import { useState } from "react";
import TabBar from "./TabBar";

// get hourly forecast data for today
// loop through hourly forecast data
// append the time, temp, and icon for each hour to the widget div.
// do the same for weekly.
// have hourly or weekly set to display none and then toggle show/hide depending on which forecast header is clicked.
export default function Modal() {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    console.log("clicked");
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className={isActive ? "show" : "hide"} onClick={toggleClass}>
            Hourly Forecast
          </h3>
          <h3 className={isActive ? "show" : "hide"} onClick={toggleClass}>
            Weekly Forecast
          </h3>
        </div>
        <div
          onClick={() => console.log("widget")}
          className="modal-forcast-widget"
        ></div>
      </div>
      <TabBar />
    </>
  );
}
