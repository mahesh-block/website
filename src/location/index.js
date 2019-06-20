import React from "react";
import "../resources/location.css";
const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.9070680126024!2d-79.67040128480564!3d44.394029379102946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3468a6e93f3%3A0xe873cf9f804b5035!2s13+Cook+St%2C+Barrie%2C+ON+L4M+4E8!5e0!3m2!1sen!2sca!4v1559514197008!5m2!1sen!2sca"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title=" this is unique title"
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
