import CartDash from "../component/CartDash";
import DashBoardHeader from "../component/DashBoardHeader";
import { useState } from "react";

function DashBoardPage() {
  const [isCartActive, setIsCartActive] = useState(true);
  return (
    <>
      <DashBoardHeader
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      {<CartDash />}
    </>
  );
}

export default DashBoardPage;
