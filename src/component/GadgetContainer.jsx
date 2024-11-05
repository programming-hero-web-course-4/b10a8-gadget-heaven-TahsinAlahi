import CategoryNav from "./CategoryNav";
import GadgetCards from "./GadgetCards";

function GadgetContainer() {
  return (
    <>
      <h1 className="lg:text-3xl text-xl font-bold text-center lg:mb-11 mb-5">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="lg:max-w-screen-lg lg:mx-auto grid lg:grid-cols-4 grid-cols-1 gap-2 mx-3">
        <CategoryNav />
        <GadgetCards />
      </div>
    </>
  );
}

export default GadgetContainer;
