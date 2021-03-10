import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import "./DetailsInfoDescription.css";

const DetailsInfoDescription = (props) => {
  const {
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
  } = props.teamDetails;
  const facebook = "https://" + strFacebook;
  const youtube = "https://" + strYoutube;
  const twitter = "https://" + strTwitter;
  // console.log(fb);
  return (
    <div className="container">
      <div className="my-3 text-justify">
        <p>{strDescriptionEN}</p>
        <p>
          Erat sit kasd lorem eos diam invidunt elitr. Aliquyam justo consetetur
          et sadipscing gubergren voluptua dolor kasd. Dolores eos no consetetur
          dolor et. Sanctus ipsum rebum eirmod labore sed. Dolore diam et justo
          accusam amet gubergren ipsum et et. Sea invidunt sanctus sea rebum
          dolores amet ipsum nonumy. Dolor amet aliquyam sit est, voluptua elitr
          ea kasd labore sanctus ut, clita at eos ea dolore ea est invidunt,
          sadipscing ipsum consetetur labore ut labore. No eirmod aliquyam stet
          labore rebum et. Dolores lorem erat sanctus et sit, elitr ipsum et sed
          accusam amet diam duo. Ut labore accusam rebum et consetetur aliquyam.
          Ea sit est lorem aliquyam. Lorem lorem lorem labore amet sadipscing
          clita voluptua justo duo. Eos lorem tempor stet diam stet, clita sit
          sit sed sadipscing vero et, et sit magna takimata dolor dolor sit
          amet, dolore gubergren sanctus et rebum elitr et. Consetetur lorem
          clita voluptua et diam gubergren amet et. Et et amet justo diam diam
          amet rebum sadipscing diam, et sit et dolor aliquyam sed est invidunt
          eos ipsum, lorem et gubergren et duo. Eos lorem ut elitr no sed eos
          duo. At sanctus ea dolore et tempor sadipscing. No aliquyam tempor et
          gubergren, ipsum sit duo ea rebum. Ipsum amet no justo duo no sanctus
          sea. Elitr consetetur diam voluptua lorem ea dolor dolor dolor. Nonumy
          amet rebum nonumy takimata. Sit gubergren eirmod tempor consetetur,
          vero lorem justo sit dolor est ut accusam, justo eos lorem amet
          eirmod, ut ea kasd sea consetetur. Kasd.
        </p>
      </div>
      <div className="row social-media-section mx-auto mt-3 mb-5">
        <div className="col-4 social-icons mx-auto">
          {" "}
          <a href={facebook} target="_blank">
            <FaFacebook className="icons mx-1" />
          </a>
        </div>
        <div className="col-4 social-icons mx-auto">
          {" "}
          <a href={youtube} target="_blank">
            <FaYoutube className="icons mx-1" />
          </a>
        </div>
        <div className="col-4 social-icons mx-auto">
          <a href={twitter} target="_blank">
            <FaTwitter className="icons mx-1 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfoDescription;
