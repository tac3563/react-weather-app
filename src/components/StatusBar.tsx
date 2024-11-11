import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("0");

  function updateTime() {
    const initialTime = new Date()
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/AM|PM/, "");
    setTime(initialTime);
  }

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

  return (
    <div className="homepage-header__nav">
      <div className="current-time">{time}</div>
      <img src="/src\images\status-bar.svg" alt="" className="status-bar" />
    </div>
  );
}
