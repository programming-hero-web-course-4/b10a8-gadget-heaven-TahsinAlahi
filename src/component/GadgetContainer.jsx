import CategoryNav from "./CategoryNav";
import GadgetCards from "./GadgetCards";

function GadgetContainer() {
  return (
    <div className="w-full grid grid-cols-4 gap-2">
      <CategoryNav />
      <GadgetCards />
    </div>
  );
}

export default GadgetContainer;
