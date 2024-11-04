import { Outlet } from "react-router-dom";
import DashBoardHeader from "../component/DashBoardHeader";
import { Modal } from "../component/PurchasedModal";

function DashBoardPage() {
  return (
    <>
      <DashBoardHeader />
      <Outlet />
      <Modal />
    </>
  );
}

export default DashBoardPage;
