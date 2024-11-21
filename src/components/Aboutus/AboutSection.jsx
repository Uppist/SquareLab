/** @format */

import React from "react";
import "../../style.css";

import hero from "../../assets/desktop/HeroPage.png";
import hero2 from "../../assets/mobile/HeroPage.png";

import about from "../../assets/desktop/aboutus.png";
import about2 from "../../assets/mobile/aboutus.png";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className='aboutsection'>
      <img className='hero' src={hero} alt='image' />
      {/*Desktop Image */}
      <img className='hero2' src={hero2} alt='image' /> {/*Mobile image */}
      <div className='img-text'>
        <h2>
          Empower Your Team,
          <br /> Elevate Your Business!
        </h2>

        <span>
          <Link to='/services'>
            View our Services{" "}
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334'
                stroke='#FF5A31'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </span>
      </div>
      <div className='about-detail'>
        <div className='aboutus'>
          <label>About Us</label>
          <img className='about' src={about} alt='Aboutus' />
          {/*Desktop Image */}
          <img className='about2' src={about2} alt='Aboutus' />
          {/*Mobile image */}
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
