/** @format */

import React, { useState } from "react";
import "../../style.css";
import squarelab from "../../assets/desktop/squareLab.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  // function sideBar() {
  //   const dropdownButton = document.querySelector(".list-menu");
  //   const sidebar = document.querySelector(".side-bar");

  //   if (dropdownButton) {
  //     sidebar.style.right = "0";
  //     sidebar.classList.add("active");
  //     sidebar.classList.remove("fade-out");
  //   }
  // }

  // function onClose() {
  //   const closeSidebarButton = document.querySelector(".dropdown-close");
  //   const sidebar = document.querySelector(".side-bar");
  //   if (closeSidebarButton) {
  //     sidebar.style.right = "-500px";
  //     sidebar.classList.add("active");

  //     sidebar.classList.add("fade-out");
  //   }
  // }

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }
  return (
    <header className='firstsection'>
      <nav className='nav'>
        <img src={squarelab} alt='logo' className='squarelab' />

        <ul className='nav-ul'>
          <Link to='/'>
            <li className='list'>About Us</li>
          </Link>
          <Link to='/services'>
            <li className='list'>Our Services</li>
          </Link>

          <Link to='/vancany'>
            <li className='list'>Vacancies</li>
          </Link>
          <Link to='/contact'>
            <li className='list-contact contact'>Contact Us</li>
          </Link>

          <li className='list-menu' onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <div
          className={`side-bar ${isSidebarVisible ? "active" : "fade-out"}`}
          id='side-bar'
        >
          <div className='image-close'>
            <img className='image-luround' src={squarelab} />

            <a className='dropdown-close' id='sidebar-close' onClick={onClose}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
                  stroke='#2B2B2B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          <ul className='sidebar-menu'>
            <Link to='/'>
              <li className='sidebar-list'>About Us</li>
            </Link>
            <Link to='/services'>
              <li className='sidebar-list'>Our Services</li>
            </Link>
            <Link to='/vancany'>
              <li className='sidebar-list'>Vacancies</li>
            </Link>
            <Link to='/contact'>
              <li className='sidebar-contact'>Contact Us</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
