import Footer from "./footer";
import MainHeader from "./MainHeader";

import { Outlet } from "react-router-dom";

function First() {
  return (
    <>
     <MainHeader/>
      <Outlet />
      <Footer />
  
    </>
  );
}

export default First;