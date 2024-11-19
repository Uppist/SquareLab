/** @format */

import React from "react";
import "../../style.css";
import squarelab from "../../assets/squareLab.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className='firstsection'>
      <nav className='nav'>
        <img src={squarelab} />

        <ul className='nav-ul'>
          <Link to='/'>
            <li className='list'>About Us</li>
          </Link>
          <Link to='/services'>
            <li className='list'>Our Services</li>
          </Link>
          <li className='list'>Vacancies</li>

          <Link to='/contact'>
            <li className='contact'>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
