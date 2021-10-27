import React from "react";
import "./Header.scss";
import krLogo from "../../assets/kr-logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <img src={krLogo} alt="" />
        </div>
        <div className="header__hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
