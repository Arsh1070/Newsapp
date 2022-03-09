import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const DashBoard = ({ clickedCatalog }) => {
  const [category, setCategory] = useState("general");

  clickedCatalog(category);

  return (
    <>
      <div>
        <Navbar setCat={setCategory} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default DashBoard;
