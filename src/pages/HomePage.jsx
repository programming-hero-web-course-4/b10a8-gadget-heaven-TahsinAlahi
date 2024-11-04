import GadgetContainer from "../component/GadgetContainer";
import HomeHeader from "../component/HomeHeader";

function HomePage() {
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto">
      <HomeHeader />
      <GadgetContainer />
    </div>
  );
}

export default HomePage;
