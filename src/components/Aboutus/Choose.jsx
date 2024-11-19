/** @format */

import React from "react";
import image3 from "../../assets/image3.png";

export default function Choose() {
  return (
    <section className='choosesection'>
      <img src={image3} alt='' />

      <div className='choose'>
        <label>Why You Should Choose Us</label>
        <ul>
          <li>
            <span>Strategic People Management</span>: Aligning HR practices with
            business goals for sustainable growth and a strong company culture.
          </li>
          <br />
          <br />
          <li>
            <span>Tailored Solutions</span>: Personalised support that meets
            client needs and exceeds expectations.
          </li>
          <br />
          <br />
          <li>
            <span>Diverse Expertise</span>: Proven success across multiple
            industries, from FMCG to financial services and engineering.
          </li>
        </ul>
      </div>
    </section>
  );
}
