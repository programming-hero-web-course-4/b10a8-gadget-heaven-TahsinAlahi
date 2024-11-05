import { Helmet } from "react-helmet-async";
import GadgetContainer from "../component/GadgetContainer";
import HomeHeader from "../component/HomeHeader";

function HomePage() {
  return (
    <div className="lg:max-w-screen-xl lg:mx-auto">
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <HomeHeader />
      <GadgetContainer />
    </div>
  );
}

export default HomePage;
