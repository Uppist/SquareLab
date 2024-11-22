/** @format */

import React from "react";
import image3 from "../../assets/desktop/image3.png";
import image4 from "../../assets/mobile/value.png";

export default function Choose() {
  return (
    <section className='choosecontainer'>
      <label>Why You Should Choose Us</label>
      <div className='choosesection'>
        <div className='img-choose'>
          <img className='desktopchoose' src={image3} alt='image' />
          <img className='mobilechoose' src={image4} alt='image' />

          <div className='choose'>
            <label>Why You Should Choose Us</label>
            <ul>
              <li>
                <span>Strategic People Management</span>: Aligning HR practices
                with business goals for sustainable growth and a strong company
                culture.
              </li>
              <br />
              <li>
                <span>Tailored Solutions</span>: Personalised support that meets
                client needs and exceeds expectations.
              </li>
              <br />
              <li className='chooselist'>
                <span>Diverse Expertise</span>: Proven success across multiple
                industries, from FMCG to financial services and engineering.
              </li>
            </ul>
          </div>
        </div>
        <ul className='chooselist2'>
          <li>
            <span>Diverse Expertise</span>: Proven success across multiple
            industries, from FMCG to financial services and engineering.
          </li>
        </ul>
      </div>
    </section>
  );
}
