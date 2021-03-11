import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderFromDetails from "../HeaderFromDetails/HeaderFromDetails";

import LeagueDetailsContainer from "../LeagueDetailsContainer/LeagueDetailsContainer";

const LeagueDetails = () => {
  let { leagueKey } = useParams();
  const [teamDetails, setTeamDetails] = useState({});
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueKey}`
    )
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.leagues[0]));
  }, [leagueKey]);

  console.log(teamDetails);

  return (
    <div>
      <HeaderFromDetails
        headerImageLogo={teamDetails.strBadge}
        headerBanner={teamDetails.strBanner}
      ></HeaderFromDetails>
      <LeagueDetailsContainer
        teamDetails={teamDetails}
      ></LeagueDetailsContainer>
    </div>
  );
};

export default LeagueDetails;
