import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../resources/footer.css";
const Footer = () => {
  return (
    <div className="footer-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget">
              <h6>Userful Links</h6>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">home</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">about us</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">company news</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">projects</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">our services</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">terms and condition</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">shop</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right" />
                      <Link to="#">contuct us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Business Hours</h6>
              <ul className="business-hour">
                <li>
                  Monday - Friday : <span>9:00 am - 18:00 pm</span>{" "}
                </li>
                <li>
                  Saturday :<span>9:00 am - 16:00 pm</span>
                </li>
                <li>
                  Sunday :<span>Closed</span>
                </li>
              </ul>
              <p>We work all the holidays!</p>
            </div>
          </div>
          <div className="col-lg-4  col-md-12">
            <div className="single-footer-widget newsletter">
              <h6>Email Newsletter</h6>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                  noValidate={true}
                >
                  <div className="form-group row no-gutters">
                    <div className="col-lg-8 col-md-8 col-7">
                      <input
                        name="EMAIL"
                        placeholder="Your Email Address"
                        onFocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''"
                        onBlur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Your Email Address '"
                        required=""
                        type="email"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-5">
                      <button className="nw-btn main_btn circle">
                        subscribe
                        <span className="lnr lnr-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <div className="info" />
                </form>
              </div>
              <p>
                Sign up for new Recover Construction Company content, updates,
                surveys &amp; offers.
              </p>
              <Link className="footer-link" to="#">
                privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row ">
            <p className="col-lg-12 footer-text ">
              Copyright © {new Date().getFullYear()} .
              <script
                type="text/javascript"
                async=""
                src="https://www.google-analytics.com/analytics.js"
              />
              All rights reserved | This template is made with
              <i className="fa fa-heart" aria-hidden="true" />
              <Link to="" target="_blank">
                Dasari Mahesh Babu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
