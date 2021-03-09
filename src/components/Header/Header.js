import React from "react";
import headerImage from "./header.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <>
      <img className="img-fluid" src={headerImage} alt="" />
    </>
  );
};

export default Header;
