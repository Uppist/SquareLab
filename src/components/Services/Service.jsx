/** @format */

import React from "react";
import service1 from "../../assets/desktop/service1.png";
import service2 from "../../assets/desktop/service2.png";
import service3 from "../../assets/desktop/service3.png";
import service4 from "../../assets/desktop/service4.png";
import service5 from "../../assets/desktop/service5.png";

import image1 from "../../assets/mobile/image2.png";
import image2 from "../../assets/mobile/image3.png";
import image3 from "../../assets/mobile/image4.png";
import image4 from "../../assets/mobile/image5.png";
import image5 from "../../assets/mobile/image6.png";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <section className='service'>
      <label>Our Services</label>
      <div className='service-grid'>
        <div className='section1'>
          <div className='service-grid-container'>
            <img className='serviceimage' src={service1} alt='image' />
            <img className='service-image1' src={image1} alt='image' />

            <div className='service-book'>
              <div className='service1'>
                <label>SQL Advisory (People Management)</label>
                <hr />
                <p>
                  SASL’s SQL Advisory service empowers businesses with strategic
                  HR solutions to optimise their workforce and drive
                  organisational success.
                  <br />
                  <br />
                  Our People Management services encompass{" "}
                  <span>Strategic HR Management</span> (Developing and
                  implementing effective HR strategies aligned with business
                  objectives); <span>Operational HR Support</span> (Providing
                  day-to-day HR support, including recruitment, onboarding,
                  performance management, and employee relations); and{" "}
                  <span>Statutory Compliance</span> (Ensuring compliance with
                  all relevant HR laws and regulations).
                  <br />
                  <br />
                  We believe that HR should be a strategic function that
                  proactively addresses organisational needs, rather than a
                  reactive response to issues. By partnering with SASL, you can
                  optimise your human capital and achieve your business goals.
                </p>
              </div>{" "}
              <Link to='/contact'>
                <label className='contact contact-us book'>Book Us Now</label>
              </Link>{" "}
            </div>
          </div>

          <div className='service-grid-container policy'>
            {" "}
            <div className='service-book service2-book'>
              <div className='service2'>
                <label>Blackboard by SASL (Policy Validation)</label>
                <hr />
                <p>
                  SASL’s Policy Validation service ensures your policies align
                  with regulations and best practices. Our expert team
                  meticulously reviews and validates a wide range of corporate,
                  departmental, and industry-specific policies, to safeguard
                  your compliance and mitigate risks.
                  <br />
                  <br />
                  We understand that staying compliant with ever-evolving
                  regulations can be complex and time-consuming. Our
                  comprehensive policy validation process involves:
                  <ul>
                    <li>
                      <span>Thorough review</span>: Our experts carefully
                      examine your policies to identify any inconsistencies,
                      gaps, or areas requiring improvement.{" "}
                    </li>
                    <li>
                      <span>Regulatory analysis</span>: We compare your policies
                      against relevant laws and regulations to ensure
                      compliance.{" "}
                    </li>
                    <li>
                      <span>Best practice assessment</span>: We evaluate your
                      policies against industry best practices to identify
                      opportunities for enhancement.{" "}
                    </li>
                    <li>
                      <span>Recommendations</span>: We provide tailored
                      recommendations to address any identified issues and
                      improve your policies' effectiveness.
                    </li>
                  </ul>
                </p>
              </div>{" "}
              <Link to='/contact'>
                <label className='contact contact-us book'>Book Us Now</label>
              </Link>{" "}
            </div>
            <img className='serviceimage' src={service2} alt='image' />
            <img className='service-image2' src={image2} alt='image' />
          </div>

          <div className='service-grid-container'>
            {" "}
            <img className='serviceimage' src={service3} alt='' />
            <img className='service-image2' src={image3} alt='' />
            <div className='service-book'>
              <div className='service1'>
                <label>CraftCV by SASL (CV Writing)</label>
                <hr />
                <p>
                  SASL’s CV writing service transforms your profile into a
                  powerful tool that showcases your unique value proposition.
                  Our expertly crafted CVs help you stand out in the competitive
                  job market by creating a compelling narrative that highlights
                  your skills and achievements. We started this service to share
                  our expertise and help individuals improve their job prospects
                  through optimised resumes.
                </p>
              </div>{" "}
              <Link to='/contact'>
                <label className='contact contact-us book'>Book Us Now</label>
              </Link>{" "}
            </div>
          </div>

          <div className='service-grid-container'>
            {" "}
            <div className='service-book service2-book'>
              <div className='service2'>
                <label>Catalyst Collective by SASL (Startup Support)</label>
                <hr />
                <p>
                  SASL’s Catalyst Collective is a startup support programme that
                  equips startups with the foundational building blocks for
                  long-term business success. Catalyst Collective empowers
                  founders with the knowledge and skills required to build a
                  resilient foundation for their ventures.
                  <br />
                  <br />
                  Catalyst Collective offers a unique blend of strategic
                  insights and practical guidance. Through interactive sessions
                  and expert consultations, the programme will set founders on
                  the path to gaining mastery in critical areas like research &
                  strategy, people management, legal structures, and operational
                  frameworks. This ensures founders not only have a compelling
                  business model but also the operational efficiency and strong
                  team culture needed to thrive in today's competitive
                  landscape.
                </p>
              </div>{" "}
              <Link to='/contact'>
                <label className='contact contact-us book'>Book Us Now</label>
              </Link>{" "}
            </div>
            <img className='serviceimage' src={service4} alt='' />
            <img className='service-image2' src={image4} alt='' />
          </div>

          <div className='service-grid-container'>
            {" "}
            <img className='serviceimage' src={service5} alt='' />
            <img className='service-image1' src={image5} alt='' />
            <div className='service-book'>
              <div className='service1'>
                <label>PAST by SASL (Retirement Planning & Support)</label>
                <hr />
                <p>
                  The Post Active Service Transition (PAST) programme is
                  intended for those contemplating retirement from paid
                  employment, for example, civil servants, private sector
                  employees and military personnel. It would also cover those
                  who had retired not too long ago and need help to refocus
                  their efforts on living productively after active service. The
                  programme covers topical matters, including understanding the
                  transition process, managing finances, developing resumes,
                  interviewing for private or public sector jobs, navigating the
                  job market, and managing mental and emotional well-being.
                </p>
              </div>{" "}
              <Link to='/contact'>
                <label className='contact contact-us book'>Book Us Now</label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
