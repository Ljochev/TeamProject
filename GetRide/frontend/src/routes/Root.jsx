import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../components/Header/HeaderComp.jsx";
import FooterComp from "../components/Footer/FooterComp.jsx";

const Root = () => {
  return (
    <div>
      {/* ako ovde go stavime header-ot ke imame problem koga nema 
      da sakame da ni se pojavuva na stranicata  */}
      {/* <HeaderComp /> */}
      <Outlet />
      {/* <FooterComp /> */}
    </div>
  );
};

export default Root;
