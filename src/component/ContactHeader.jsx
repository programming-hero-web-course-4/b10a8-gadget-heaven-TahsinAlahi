import { NavLink } from "react-router-dom";

function ContactHeader() {
  function handleActiveClass({ isActive }) {
    return `px-10 py-2 rounded-3xl ${
      isActive
        ? "bg-white text-purple-700 border-2 border-transparent"
        : "border-2 border-white"
    }`;
  }

  return (
    <div className="w-full mt-4 mb-10">
      <header className="w-full bg-purple-700">
        <div className="lg:max-w-screen-lg lg:mx-auto p-8 text-center text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="w-3/4 mx-auto text-slate-200 pt-4 pb-8">
            We were made to help you find the right technology that fits your
            needs. It is you who is in control. Help us with your feedback. Your
            feedbacks are appreciated
          </p>
          <div className="flex items-center justify-center gap-5">
            <NavLink to="/contact/contact" className={handleActiveClass}>
              Contact Us
            </NavLink>
            <NavLink to="/contact/feedback" className={handleActiveClass}>
              Feedback
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ContactHeader;
