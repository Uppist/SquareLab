/** @format */

import React from "react";
import NavBar from "../Aboutus/NavBar";
import Vacancies from "./Vacancies";
import Footer from "../Aboutus/Footer";

export default function Vacany() {
  return (
    <div className='vacany-section'>
      <NavBar />
      <Vacancies />
      <Footer />
    </div>
  );
}
