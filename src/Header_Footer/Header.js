import React from "react";
import { NavLink } from "react-router-dom";
import companylogo from "../images/company_logo_first.jpg";
import "../resources/header.css";
const Header = () => {
  return (
    <div id="sticky-wrapper" className="sticky-wrapper">
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <img src={companylogo} alt="company logo" href="/" />
            </div>
            <div className="col-12">
              <nav className="site-navigation text-center " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/AboutUs" className="nav-link">
                      WhoWeAre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ourteam" className="nav-link">
                      TheTeam
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ourwork" className="nav-link">
                      Health & Safety
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Projects" className="nav-link">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus" className="nav-link">
                      ContactUs
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            {/*     <div className="toggle-button align-items-center d-flex">
            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Get Quote</a>
            <a href="#" className="site-menu-toggle p-5 js-menu-toggle text-black d-inline-block d-lg-none d-flex"><span className="icon-menu h3 m-0"></span></a>
          </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
