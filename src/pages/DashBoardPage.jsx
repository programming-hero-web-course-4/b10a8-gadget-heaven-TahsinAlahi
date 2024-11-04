import { Outlet } from "react-router-dom";
import DashBoardHeader from "../component/DashBoardHeader";

function DashBoardPage() {
  return (
    <>
      <DashBoardHeader />
      <Outlet />
    </>
  );
}

export default DashBoardPage;
