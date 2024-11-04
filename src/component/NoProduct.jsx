function NoProduct() {
  return (
    <div className="col-span-3 mx-auto w-full flex items-center justify-center flex-col">
      <h1 className="text-center text-2xl font-semibold text-black">
        No Product Found
      </h1>
      <p className="text-center text-lg text-gray-700">
        Sorry, There is no products in this category.
      </p>
    </div>
  );
}

export default NoProduct;
