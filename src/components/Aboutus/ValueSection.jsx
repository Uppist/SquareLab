/** @format */

import React from "react";
import "../../style.css";
import value from "../../assets/values.png";

export default function ValueSection() {
  return (
    <section className='section-value'>
      <div className='valuesection'>
        <img src={value} alt='' />
        <div className='values'>
          <label>Values</label>
          <div>
            <p>
              <span> Our Mission</span> is to champion a thriving future by
              accelerating sustainable products, services and practices with
              measurable impact.
            </p>
            <br />
            <p>
              <span>The Vision</span> is to become a leading catalyst for
              positive change by empowering ventures and communities that unlock
              shared value for all stakeholders.
            </p>
          </div>
        </div>
      </div>

      <div className='core-value'>
        <label>
          Our <span>Core Values</span> are centred around
        </label>

        <ul>
          <li>
            Daunting challenges loom before our dream of driving social change.
            Yet, it is <span>Courage</span> that fuels our relentless pursuit of
            progress. Daring ideas are our currency, bold action our language.
            Beyond convention, we tap the entrepreneurial spirit, forever fueled
            by Courage to rewrite the narrative of tomorrow.{" "}
          </li>
          <li>
            Every step we take is guided by the compass of{" "}
            <span>Integrity</span>. Fairness, accountability, and grounded
            principles illuminate our path, ensuring every action builds towards
            a future we can be proud of.
          </li>
          <li>
            At the heart of our pursuit of positive change lies a fierce{" "}
            <span>Responsibility</span>. We own the impact of our endeavours,
            weaving accountability into every strand, leaving a legacy of
            progress for generations to come.
          </li>
          <li>
            We chase <span>Excellence</span> in all we do, crafting enduring
            legacies through meticulous processes and unwavering support for our
            stakeholders.
          </li>
        </ul>
      </div>
    </section>
  );
}
