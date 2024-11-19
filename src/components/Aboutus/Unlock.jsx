/** @format */

import React from "react";
import unlock from "../../assets/Image.png";
import image from "../../assets/imag2.png";
import { Link } from "react-router-dom";

export default function Unlock({ show }) {
  return (
    <section className='unlock'>
      <div className='unlocksection'>
        <div className='unlock-team'>
          <label>Ready to Unlock Your Team's Full Potential?</label>
          <Link to='/contact'>
            <label className='contact contact-us'>Contact Us</label>
          </Link>{" "}
        </div>

        <img src={unlock} alt='' />
      </div>
      {show ? (
        <div className='imagesection'>
          <img src={image} />
          <div className='empower'>
            <label>Empowering Your Workforce for Success</label>
            <Link to='/contact'>
              <label className='contact contact-us'>Contact Us</label>
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
