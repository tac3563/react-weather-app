import HomepageHeader from "./HomepageHeader";
import ForecastWidgets from "./forecasts/ForecastWidgets.tsx";

export interface HomeProps {
    city: string;
}

export default function Home() {

    const city = 'Leicester'

  return (
    <>
      <div className="home-bg-wrapper"></div>
      <div className="app-content-container">
        <HomepageHeader city={city} />
        <ForecastWidgets city={city} />
      </div>
    </>
  );
}
