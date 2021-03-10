import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
        <h5>Founded : {intFormedYear}</h5>
        <h5>Country : {strCountry}</h5>
        <h5>Sport Type : {strSport}</h5>
        <h5>Gender : {strGender}</h5>
      </div>
      <div className="col-12 col-md-5">
        <img src="./female.png" alt="" />
      </div>
    </div>
  );
};

export default DetailsInfoCart;
