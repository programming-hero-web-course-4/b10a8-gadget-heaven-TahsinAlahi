import { Outlet } from "react-router-dom";
import ContactHeader from "../component/ContactHeader";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Gadget Heaven</title>
      </Helmet>
      <ContactHeader />
      <Outlet />
    </>
  );
}

export default ContactPage;
