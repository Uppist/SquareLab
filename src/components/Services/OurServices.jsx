/** @format */

import React, { useEffect } from "react";
import Service from "./Service";
import Unlock from "../Aboutus/Unlock";
import Footer from "../Aboutus/Footer";
import NavBar from "../Aboutus/NavBar";

export default function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='section2'>
      <div className='vacany-section1'>
        <div className='vacany-section2'>
          <div className='vacany-section3'>
            <div className='vacany-section4'>
              <div className='vacany-section5'>
                <div className='vacany-section6'>
                  <div className='vacany-section7'>
                    <NavBar />
                    <Service />
                    <Unlock show={false} />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
