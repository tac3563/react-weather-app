import HomepageHeader from "./HompageHeader";
import Modal from "./Modal";

export default function Home() {
  return (
    <>
      <div className="home-bg-wrapper"></div>
      <div className="app-content-container">
        <HomepageHeader />
        <Modal />
      </div>
    </>
  );
}
