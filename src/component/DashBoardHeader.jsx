function DashBoardHeader({ isCartActive, setIsCartActive }) {
  return (
    <div className="w-full mt-4">
      <header className="w-full bg-purple-700">
        <div className="lg:max-w-screen-lg lg:mx-auto p-8 text-center text-white">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="w-3/4 mx-auto text-slate-200 pt-4 pb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-5">
            <button
              className={`px-10 py-2 rounded-3xl ${
                isCartActive
                  ? "bg-white text-purple-700 border-2 border-transparent "
                  : "border-2 border-white"
              }`}
              onClick={() => setIsCartActive(true)}
            >
              Cart
            </button>
            <button
              className={`px-10 py-2 rounded-3xl ${
                !isCartActive
                  ? "bg-white text-purple-700 border-2 border-transparent "
                  : "border-2 border-white"
              }`}
              onClick={() => setIsCartActive(false)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DashBoardHeader;