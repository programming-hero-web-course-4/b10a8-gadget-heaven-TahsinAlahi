function ProductDetail({ product }) {
  return (
    <div className="w-10/12 mx-auto p-4 border border-black rounded-3xl grid grid-cols-3 bg-white">
      <div className="col-span-1">
        <img src="" alt="" />
      </div>
      <div className="col-span-2 h-full flex flex-col items-start gap-4">
        <h1>{product.product_title}</h1>
        <p>Price : ${product.price}</p>
        <p
          className={`px-4 py-1 w-fit rounded-2xl border font-semibold ${
            product.availability
              ? "bg-green-400/70 border-green-900 text-green-800"
              : "bg-red-400/70 border-red-900 text-red-800"
          }`}
        >
          {product.availability ? "In Stock" : "Out of Stock"}
        </p>
        <p>{product.description}</p>
        <div className="text-gray-500">
          <h3 className="text-xl font-semibold text-left text-black mb-3">
            Specification
          </h3>
          <ol>
            {product.specification.map((spec, i) => (
              <li key={i} className="pl-2">
                {i + 1}. {spec}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Rating</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
