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
      <NavBar />
      <Service />
      <Unlock show={false} />
      <Footer />
    </div>
  );
}
