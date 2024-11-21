/** @format */

import React from "react";
import NavBar from "../Aboutus/NavBar";
import Vacancies from "./Vacancies";
import Footer from "../Aboutus/Footer";

export default function Vacany() {
  return (
    <div className='vacany-section'>
      <div className='vacany-section1'>
        <div className='vacany-section2'>
          <div className='vacany-section3'>
            <div className='vacany-section4'>
              <div className='vacany-section5'>
                <NavBar />
                <Vacancies />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
