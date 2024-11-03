import CategoryNav from "./CategoryNav";

function GadgetContainer() {
  return (
    <div className="w-full grid grid-cols-4 gap-2">
      <CategoryNav />
      <div className="col-span-3 grid grid-cols-3"></div>
    </div>
  );
}

export default GadgetContainer;
