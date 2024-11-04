import bannerImg from "../assets/banner.jpg";

function HomeHeader() {
  return (
    <header className="h-[calc(100vh-75px)] p-2 pt-0 border border-gray-700/30 border-t-0 rounded-b-lg mb-56">
      <div className="bg-purple-700 h-full w-full relative">
        <div className="text-center w-2/3 mx-auto pt-12">
          <h1 className="text-4xl font-bold text-white mb-5">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-gray-200 mb-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="px-5 py-4 bg-white text-xl font-semibold rounded-3xl text-purple-700 hover:bg-slate-200">
            Shop Now
          </button>
        </div>
        <div className="absolute w-2/3 top-1/2 mt-6 left-1/2 -translate-x-1/2 p-4 border-2 border-white rounded-3xl backdrop-blur-md object-cover shadow-md">
          <img
            src={bannerImg}
            alt="Banner image"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
