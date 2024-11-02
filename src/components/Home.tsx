import HomepageHeader from "./HompageHeader";
import Modal from "./Modal";

export default function Home() {
  return (
    <>
      <div className="home-bg-wrapper"></div>
      <div className="app-content-container">
        <HomepageHeader />
        <img
          className="house-graphic"
          src="/src/images/house-graphic.webp"
          alt="image of a house"
        />
        <Modal />
      </div>
    </>
  );
}
