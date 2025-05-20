import MainHeader from "./MainHeader";

import { Outlet } from "react-router-dom";

function First() {
  return (
    <>
     <MainHeader/>
      <Outlet />
  
    </>
  );
}

export default First;