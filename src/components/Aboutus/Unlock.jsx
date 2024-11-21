/** @format */

import React from "react";
import unlock from "../../assets/desktop/Image.png";
import unlock2 from "../../assets/mobile/unlock.png";

import image from "../../assets/desktop/imag2.png";
import image2 from "../../assets/mobile/image.jpg";

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

        <img className='desktopunlock' src={unlock} alt='desktopimage' />
        <img className='mobileunlock' src={unlock2} alt='mobileimage' />
      </div>
      {show ? (
        <div className='imagesection'>
          <img className='unlockimage' src={image} alt='' />
          <img className='unlockimage2' src={image2} alt='' />

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
