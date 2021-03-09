import React, { useEffect, useState } from "react";
import TeamCart from "../TeamCart/TeamCart";
import "./LeagueContainer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const LeagueContainer = () => {
  const [leagueDetails, setLeagueDetails] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues));
  }, []);

  return (
    <div className="main-div">
      <div className="row container mx-auto">
        {leagueDetails.map((ld) => (
          <TeamCart key={ld.idLeague} leagueDetails={ld}></TeamCart>
        ))}
      </div>
    </div>
  );
};

export default LeagueContainer;
