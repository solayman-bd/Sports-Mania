import React from "react";
import "./HeaderFromDetails.css";

const HeaderFromDetails = (props) => {
  const { headerImageLogo, headerBanner } = props;

  return (
    <div
      style={{ backgroundImage: `url(${headerBanner})` }}
      className="header-from-details bg-image"
    >
      <div className="parent">
        <div className="child">
          <img className="img-fluid" src={headerImageLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderFromDetails;
