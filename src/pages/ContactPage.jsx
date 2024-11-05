import { Outlet } from "react-router-dom";
import ContactHeader from "../component/ContactHeader";

function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Outlet />
    </>
  );
}

export default ContactPage;
