/** @format */

import React from "react";
import "../../style.css";

import hero from "../../assets/HeroPage.png";
import about from "../../assets/aboutus.png";

export default function AboutSection() {
  return (
    <section className='aboutsection'>
      <img className='hero' src={hero} />
      <div className='img-text'>
        <h2>Empower Your Team, Elevate Your Business!</h2>

        <span>View our Services</span>
      </div>
      <div className='about-detail'>
        <div className='aboutus'>
          <label>About Us</label>
          <img className='about' src={about} alt='About' />
        </div>

        <div className='details'>
          <p>
            SquaredLAB Advisory Services Limited (“SASL”, “SQL Advisory”)
            unlocks peak performance for startups, SMEs, and established
            companies. By weaving best practices into your company culture, we
            build a foundation for sustainable growth.
            <br />
            <br />
            Our expertise empowers you to seize emerging opportunities and
            navigate the ever-changing business landscape.
          </p>
          <p>
            The core focus of SQL Advisory is mainly centred around People
            Management matters and ensuring that pertinent human resources
            issues are taken into cognisance when starting and building a
            company. People Management must be seen from a strategic point of
            view and not just something organisations react to when matters
            arise.
          </p>
          <p>
            Our engagement approach with clients offers a combination of
            competence and experience, where our team helps clients identify
            issues, assess each situation or challenge and pledge to work with
            them to provide practical interventions in resolving problems. All
            our intervention activities are in tune with the strategic or
            operational intent of the clients in each case, thus, each client
            receives the service they require, whilst we always aim to surpass
            expectations.
          </p>
          <span>
            List industries of clients supported in the past and currently
            supporting include
          </span>
          <div className='list-of-industries'>
            <ul>
              <li>FMCG</li>
              <li>Manufacturing</li>
              <li>Real Estate</li>
              <li>
                Financial Services{" "}
                <span>
                  (Asset Management,
                  <br /> Microfinance Bank)
                </span>
              </li>
              <li>Engineering and Procurement</li>
            </ul>
            <ul>
              <li>Hospitality</li>
              <li>
                Agriculture <span>(Investments)</span>
              </li>
              <li>
                Engineering Services <span>(Oil and Gas Midstream)</span>
              </li>
              <li>Security Services</li>
              <li>Social Impact etc</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
