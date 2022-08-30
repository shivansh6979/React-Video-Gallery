import React from "react";
import main from "./Images/main.png";
const Header = () => {
  return (
    <div className="header">
      <img src={main} alt="loading" />
      <h1>Video-Finder</h1>
    </div>
  );
};

export default Header;
