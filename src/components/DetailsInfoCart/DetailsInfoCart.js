import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import femaleImg from "./female.png";
import maleImg from "./male.png";
import {
  FaFontAwesomeFlag,
  FaFootballBall,
  FaTransgenderAlt,
  FaRegBuilding,
} from "react-icons/fa";
const DetailsInfoCart = (props) => {
  const {
    strLeagueAlternate,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
  } = props.teamDetails;
  let genderFinder;
  if (strGender === "Male") {
    genderFinder = true;
  } else {
    genderFinder = false;
  }
  return (
    <div className="row text-white mt-3 bg-primary rounded">
      <div className="col-12 col-md-7 ">
        <h1>{strLeagueAlternate}</h1>
        <h5>
          <FaRegBuilding />
          <span className="ml-1">Founded : {intFormedYear}</span>
        </h5>
        <h5>
          <FaFontAwesomeFlag />
          <span className="ml-1">Country : {strCountry}</span>
        </h5>
        <h5>
          <FaFootballBall />
          <span className="ml-1">Sport Type : {strSport}</span>
        </h5>
        <h5>
          <FaTransgenderAlt />
          <span className="ml-1"> Gender : {strGender}</span>
        </h5>
      </div>
      <div className="col-12 col-md-5 py-1">
        {genderFinder ? (
          <img className="img-fluid" src={maleImg} alt="" />
        ) : (
          <img className="img-fluid" src={femaleImg} alt="" />
        )}
      </div>
    </div>
  );
};

export default DetailsInfoCart;
