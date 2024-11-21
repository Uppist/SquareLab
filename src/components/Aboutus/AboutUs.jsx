/** @format */

import React, { useEffect } from "react";
import "../../style.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ValueSection from "./ValueSection";
import Unlock from "./Unlock";
import Choose from "./Choose";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='background1'>
      <div className='background2'>
        <div className='background3'>
          <div className='background4'>
            <div className='background5'>
              <div className='background6'>
                <div className='background7'>
                  <div className='background8'>
                    <div className='background9'>
                      <div className='background10'>
                        <div className='background11'>
                          <div className='background12'>
                            <NavBar />
                            <AboutSection />
                            <ValueSection />
                            <Unlock show={true} />
                            <Choose />
                            <Footer />
                          </div>
                        </div>
                      </div>
                    </div>
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
