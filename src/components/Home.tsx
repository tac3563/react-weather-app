import HomepageHeader from "./HompageHeader";
import ForecastWidgets from "./ForecastWidgets";

export default function Home() {
  return (
    <>
      <div className="home-bg-wrapper"></div>
      <div className="app-content-container">
        <HomepageHeader />
        <ForecastWidgets />
      </div>
    </>
  );
}
