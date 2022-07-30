import React from "react";
import logo from "../assets/furry_town_logo.png";
import whatsapp_logo from "../assets/whatsapp.svg";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar_wrapper">
        <div className="navbar_logo animate__animated animate__bounceInDown">
          <img src={logo} alt="" />
          <h2 id="logo_text">The Furry Town</h2>
        </div>

        <div className="navbar_info">
          <div className="navbar_text animate__animated  animate__backInRight">
            Home
          </div>
          <div className="navbar_text animate__animated  animate__backInRight">
            Testimonial
          </div>
          <div className="navbar_text animate__animated  animate__backInRight">
            Services
          </div>
          <div className="navbar_text animate__animated  animate__backInRight">
            About us
          </div>
          <div className="whatsapp_logo">
            <img src={whatsapp_logo} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="home_image  ">
            <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg" alt="" />
        </div> */}
    </div>
  );
};
