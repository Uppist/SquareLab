/** @format */

import React from "react";
// import { Link } from "react-router-dom";
import Vacancy from "../../Vacancy.json";

export default function Vacancies() {
  return (
    <section className='vacancies'>
      <div className='explore'>
        <h2>Vacancies</h2>
        <label>Explore the Latest Career Opportunities Tailored for You</label>
      </div>

      <div className='vacany-jobs'>
        {Vacancy.map((data) => (
          <div className='job'>
            <label>{data.Time}</label>
            <div className='logo-title'>
              <img src={data.logo} alt='' />
              <div className='company-title'>
                <label className='job-title'>{data["job-title"]}</label>
                <label className='company-name'>{data["company-name"]}</label>
              </div>
            </div>

            <div className='p-jobdetails'>
              {" "}
              <div className='job-details'>
                <ul>
                  <li>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                        stroke='#FF5A31'
                        strokeOpacity='0.7'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12 6V12L16 14'
                        stroke='#FF5A31'
                        strokeOpacity='0.7'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <label>{data.role}</label>
                  </li>
                  <li>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <mask
                        id='mask0_184_154'
                        // style={"mask-type:luminance"}
                        maskUnits='userSpaceOnUse'
                        x='0'
                        y='0'
                        width='24'
                        height='24'
                      >
                        <path
                          d='M0 1.90735e-06H24V24H0V1.90735e-06Z'
                          fill='white'
                        />
                        <path
                          d='M23 23V1H1V23H23Z'
                          stroke='white'
                          strokeWidth='2'
                        />
                      </mask>
                      <g mask='url(#mask0_184_154)'>
                        <path
                          d='M19.3091 6.37332V4.49621C19.3091 3.46187 18.4705 2.62332 17.4362 2.62332H2.80908C1.77357 2.62332 0.934082 3.46281 0.934082 4.49832C0.934082 5.53384 1.77357 6.37332 2.80908 6.37332H21.1862C22.2205 6.37332 23.0591 7.21187 23.0591 8.24621V11.0608'
                          stroke='#FF5A31'
                          strokeOpacity='0.7'
                          strokeWidth='2'
                          stroke-miterlimit='10'
                        />
                        <path
                          d='M23.0591 16.6858V19.5004C23.0591 20.5348 22.2205 21.3733 21.1862 21.3733H2.80908C1.77357 21.3733 0.934082 20.5339 0.934082 19.4983V4.49832'
                          stroke='#FF5A31'
                          strokeOpacity='0.7'
                          strokeWidth='2'
                          stroke-miterlimit='10'
                        />
                        <path
                          d='M23.0591 16.6858H18.3716C16.8183 16.6858 15.5591 15.4266 15.5591 13.8733C15.5591 12.32 16.8183 11.0608 18.3716 11.0608H23.0591V16.6858Z'
                          stroke='#FF5A31'
                          strokeOpacity='0.7'
                          strokeWidth='2'
                          stroke-miterlimit='10'
                        />
                      </g>
                    </svg>

                    <label>{data.allowance}</label>
                  </li>
                  <li>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
                        stroke='#FF5A31'
                        strokeOpacity='0.7'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                        stroke='#FF5A31'
                        strokeOpacity='0.7'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <label>{data.location}</label>
                  </li>
                </ul>
                <label className='apply'>Apply</label>
              </div>
              <p>{data.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <button>1</button>
          <button>2</button>
        </div>
        <button>Next</button>
      </div>
    </section>
  );
}
