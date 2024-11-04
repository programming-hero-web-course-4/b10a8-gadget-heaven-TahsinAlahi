import CategoryNav from "./CategoryNav";
import GadgetCards from "./GadgetCards";

function GadgetContainer() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-11">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="lg:max-w-screen-lg lg:mx-auto grid grid-cols-4 gap-2">
        <CategoryNav />
        <GadgetCards />
      </div>
    </>
  );
}

export default GadgetContainer;
