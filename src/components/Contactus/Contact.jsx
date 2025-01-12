/** @format */

/** @format */

import React, { useState, useEffect, useRef } from "react";
import location from "../../assets/desktop/location.png";
import location2 from "../../assets/mobile/map.png";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k49gded",
        "template_gbkyx8c",
        form.current,
        "Dr_TDKK9HAWTw7qNU"
      )
      .then(
        () => {
          toast.success("Message sent!");
        },
        (error) => {
          console.log("emailjs", error);
          toast.error("Failed to send email. Please try again.");
        }
      );
  }
  const [selectedOption, setSelectedOption] = useState(""); // Store a string
  const [options] = useState([
    "SQL Advisory",
    "Blackboard by SASL",
    "CraftCV by SASL",
    "Catalyst Collective by SASL",
    "PAST by SASL",
  ]);
  const [isOpen, setIsOpen] = useState(false); // Use a single boolean

  function handleSelect(option) {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown
  }

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contactsection'>
      <div className='get-in-touch'>
        <div className='touch-form'>
          <h2>Get in Touch</h2>
          <label>Use the form below to contact us</label>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <div className='input-text'>
            <div className='select-service select'>
              <div
                className={`select-list ${isOpen ? "select-clicked" : ""}`}
                onClick={toggleDropdown}
              >
                <span className='selected-list'>
                  {selectedOption || "Select Service"}
                </span>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                    stroke='currentColor'
                    strokeOpacity='0.8'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              {isOpen && (
                <ul className='menu'>
                  {options.map((option) => (
                    <li
                      key={option}
                      className={`menu-item ${
                        selectedOption === option ? "active" : ""
                      }`}
                      onClick={() => handleSelect(option)}
                      role='option'
                      name='from_service'
                    >
                      {option}
                      {/* <hr /> */}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input type='hidden' name='from_service' value={selectedOption} />
            <input type='text' placeholder='Full name' name='from_name' />
            <input
              type='phonenumber'
              placeholder='Phone number'
              name='from_number'
            />
            <input type='email' placeholder='Email address' name='from_email' />
            <textarea placeholder='Message' name='message'></textarea>
          </div>
          <button type='submit' className='contact contact-us book'>
            Send Message
          </button>
        </form>

        <div className='info-container'>
          <div className='info'>
            <svg
              width='23'
              height='19'
              viewBox='0 0 23 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M23 1.625V6.125L11.5 10.625L0 6.125V1.625C0 1.32663 0.12116 1.04048 0.336827 0.829505C0.552494 0.618527 0.845001 0.5 1.15 0.5H21.85C22.155 0.5 22.4475 0.618527 22.6632 0.829505C22.8788 1.04048 23 1.32663 23 1.625ZM0 8.54825V17.375C0 17.6734 0.12116 17.9595 0.336827 18.1705C0.552494 18.3815 0.845001 18.5 1.15 18.5H21.85C22.155 18.5 22.4475 18.3815 22.6632 18.1705C22.8788 17.9595 23 17.6734 23 17.375V8.54825L11.5 13.0483L0 8.54825Z'
                fill='#FF5A31'
              />
            </svg>
            <label>info@sqladvisory.co</label>
          </div>

          <div className='info'>
            <svg
              width='24'
              height='33'
              viewBox='0 0 24 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_83_665)'>
                <path
                  d='M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z'
                  fill='#FF5A31'
                />
              </g>
              <defs>
                <clipPath id='clip0_83_665'>
                  <rect
                    width='24'
                    height='32'
                    fill='white'
                    transform='translate(-0.000732422 0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
            <label>Gbagada, Lagos</label>
          </div>
        </div>
      </div>
      <img className='locationimage' src={location} alt='location' />
      <img className='locationimage2' src={location2} alt='location2' />
      <ToastContainer />
    </div>
  );
}
