import React from "react";
import "./HeaderFromDetails.css";

const HeaderFromDetails = (props) => {
  const { headerImageLogo } = props;

  return (
    <div className="header-from-details bg-image">
      <div className="image-header-details">
        <img className="img-fluid pt-4" src={headerImageLogo} alt="" />
      </div>
    </div>
  );
};

export default HeaderFromDetails;
