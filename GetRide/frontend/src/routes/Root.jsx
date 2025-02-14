import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../components/Header/HeaderComp.jsx";
import FooterComp from "../components/Footer/FooterComp.jsx";

const Root = () => {
  return (
    <div>
      <HeaderComp />
      <Outlet />
      {/* <FooterComp /> */}
    </div>
  );
};

export default Root;
