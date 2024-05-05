import React, { useState } from "react";
import logo from "../assets/shared/nasa-logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/App.css";
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions';


const Header = (props) => {
  const [openLinks, setOpenLinks] = useState(false); //mobile for responsive

  const userstate = useSelector(state => state.loginUserReducer)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentUser } = userstate

  const dispatch = useDispatch()

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div >
      <a href="#main" className="skip-to-content">Skip to content</a>

      <header className="primary-header flex pa" >

        <div>
          <img src={logo} alt="Nasa Apod" className="logo" />


        </div>

        <button
          className={`mobile-nav-toggle ${openLinks ? "close" : "open"}`}
          aria-controls="primary-navigation"
          onClick={toggleNavbar}
        >
          {/* only visible for screen readers */}
          <span aria-expanded={!openLinks} className="sr-only">
            Menu
          </span>
        </button>

        <nav className="navbar">
          <ul
            className={`primary-navigation flex ${openLinks ? "" : "hidden"}`}
          >
            <li>
              <NavLink
                to="/"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              >
                Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/nasa-photo"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              >
                {/* the aria-hidden is so that span won't be read to the screen reader */}

                APOD</NavLink>
            </li>
            <li>
              <NavLink
                to="/mars"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              >
                {/* the aria-hidden is so that span won't be read to the screen reader */}

                MARS</NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              >
                {/* the aria-hidden is so that span won't be read to the screen reader */}

                <span aria-hidden="true">01</span>
                Destination</NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              > <span aria-hidden="true">02</span>
                Crew</NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={`${(isActive) => isActive ? "active" : ""}
              ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator`}
              > <span aria-hidden="true">03</span>
                Technology</NavLink>
            </li>

            {currentUser ? (
              <li>
              <div className="dropdown">


                <a style={{ color: 'white' }} className="ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <h15>Hi,{currentUser.name}</h15> <img src='https://static.wixstatic.com/media/618c8c_5f176f88792f40609c74309e7f6f2eb2~mv2.png' style={{ height: '20px', height: '20px' }} />
                </a>

                <ul class="dropdown-content" style={{ minWidth: '0rem ' }} aria-labelledby="dropdownMenuButton1">
                  <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><h9>Logout</h9></a>
                </ul>
              </div>
              </li>

            ) : (

              <li className="nav-item mt-1">
                <a className="ff-sans-cond uppercase text-white letter-spacing-2 underline-indicator" href="/login">
                  <h15>Login</h15>
                </a>
              </li>
            ) }
          </ul>
        </nav>
      </header>


    </div>
  );
};

export default Header;
