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
    </>
  );
}

export default DashBoardPage;
