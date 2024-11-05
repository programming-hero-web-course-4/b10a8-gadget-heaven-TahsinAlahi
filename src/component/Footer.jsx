function Footer() {
  return (
    <footer className="lg:max-w-screen-xl lg:mx-auto lg:py-20 py-10">
      <div className="text-center pb-5 border-b-2 border-gray-700/20">
        <h2 className="text-3xl font-bold mb-4">Gadget Heaven</h2>
        <p className="text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-8 w-4/5 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Service</h1>
          <ul className="flex items-center justify-center gap-1 flex-col text-center text-gray-500 ">
            <li className="hover:underline hover:cursor-pointer">
              Product Support
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="hover:underline hover:cursor-pointer">Returns</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Company</h1>
          <ul className="flex items-center justify-center gap-1 flex-col text-center text-gray-500 ">
            <li className="hover:underline hover:cursor-pointer">About Us</li>
            <li className="hover:underline hover:cursor-pointer">Careers</li>
            <li className="hover:underline hover:cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Legal</h1>
          <ul className="flex items-center justify-center gap-1 flex-col text-center text-gray-500 ">
            <li className="hover:underline hover:cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
