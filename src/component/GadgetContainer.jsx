import CategoryNav from "./CategoryNav";
import GadgetCards from "./GadgetCards";

function GadgetContainer() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-11">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="w-full grid grid-cols-4 gap-2">
        <CategoryNav />
        <GadgetCards />
      </div>
    </div>
  );
}

export default GadgetContainer;
