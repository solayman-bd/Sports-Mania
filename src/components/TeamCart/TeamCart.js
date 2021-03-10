import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TeamCart = (props) => {
  const { idLeague, strLeague, strSport } = props.leagueDetails;
  const [teamDetails, setTeamDetails] = useState({});
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.leagues[0]));
  }, [idLeague]);
  // console.log(teamDetails);
  return (
    <div className="col-md-3 col-12 mx-auto my-3">
      <div className="card cart-custom-style">
        <img
          src={teamDetails.strBadge}
          className="card-img-top w-50 rounded mx-auto d-block"
          alt="..."
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title">{strLeague}</h5>
          <p className="card-text">Sports Type : {strSport}</p>

          <Link to={`/league/${idLeague}`}>
            <button className="btn btn-primary"> Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCart;
