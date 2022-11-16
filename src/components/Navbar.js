import React, { useState } from "react";
import "./navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import {Link} from "react-router-dom";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav id="navbar" className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>R</span>eal Time 
            <span> T</span>ax Deduction System
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li >
              <Link id="link" to="/">Home</Link>
            </li>
            <li>
              <Link id="link" to= "/Crypto">Customer</Link>
            </li>
            {/* <li>
              <Link id="link" to="/search">Search</Link>
            </li> */}
            <li>
              <Link id="link" to="/invoice">Business</Link>
            </li>
            <li>
              <Link id="link" to="/gov">Government</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link
              id="ic"
                to="/"
                target="_Ajeet">
                {/* <FaFacebookSquare className="facebook" /> */}
              </Link>
            </li>
            <li>
              <Link
              id="ic"
                to='/'
                target="_Ajeet">
                {/* <FaInstagramSquare className="instagram" /> */}
              </Link>
            </li>
            <li>
              <Link
              id="ic"
                to='/'
                target="_Ajeet">
                {/* <FaYoutubeSquare className="youtube" /> */}
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <Link to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      
    </>
  );
};

export default Navbar;