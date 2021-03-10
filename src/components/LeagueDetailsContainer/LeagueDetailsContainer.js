import React from "react";
import DetailsInfoCart from "../DetailsInfoCart/DetailsInfoCart";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DetailsInfoDescription from "../DetailsInfoDescription/DetailsInfoDescription";

const LeagueDetailsContainer = (props) => {
  const teamDetails = props.teamDetails;

  return (
    <div className="container">
      <DetailsInfoCart teamDetails={teamDetails}></DetailsInfoCart>
      <DetailsInfoDescription
        teamDetails={teamDetails}
      ></DetailsInfoDescription>
    </div>
  );
};

export default LeagueDetailsContainer;
