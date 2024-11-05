import { Outlet } from "react-router-dom";
import DashBoardHeader from "../component/DashBoardHeader";
import { Modal } from "../component/PurchasedModal";
import { Helmet } from "react-helmet-async";

function DashBoardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
        {/* <link rel="canonical" href="/dashboard" /> */}
      </Helmet>
      <DashBoardHeader />
      <Outlet />
      <Modal />
    </>
  );
}

export default DashBoardPage;
