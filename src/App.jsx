/** @format */

import AboutUs from "./components/Aboutus/AboutUs";
import Contactus from "./components/Contactus/Contactus";
import OurServices from "./components/Services/OurServices";
import { HashRouter, Routes, Route } from "react-router-dom";
import Vacany from "./components/Vacancy/Vacany";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='services' element={<OurServices />} />
        <Route path='contact' element={<Contactus />} />{" "}
        <Route path='vancany' element={<Vacany />} />
      </Routes>
    </HashRouter>

    // <Contactus />
  );
}
