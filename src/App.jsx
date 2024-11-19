/** @format */

import AboutUs from "./components/Aboutus/AboutUs";
import Contactus from "./components/Contactus/Contactus";
import OurServices from "./components/Services/OurServices";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='services' element={<OurServices />} />
        <Route path='contact' element={<Contactus />} />
      </Routes>
    </HashRouter>

    // <Contactus />
  );
}
