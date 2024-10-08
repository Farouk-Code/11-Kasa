/* eslint-disable react/prop-types */
import Collapse from "./Collapse";
import Ratings from "./Ratings";
import Tags from "./Tags";

const LogementsDetails = ({ logement }) => {
  const { title, description, host, rating, location, equipments, tags } = logement;

  return (
    <div className="logement-details-container">
      <div className="logement-details">
        <div className="logement-infos">
          <h2 className="logement-title">{title}</h2>
          <p className="logement-location">{location}</p>
          <Tags tags={tags} />
        </div>
        <div className="logement-host-and-rating">
          <div className="logement-host">
            <p>{host.name}</p>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#C4C4C4" />
              <image href={host.picture} x="0" y="0" width="64" height="64" clipPath="url(#circleClip)" />
              <defs>
                <clipPath id="circleClip">
                  <circle cx="32" cy="32" r="32" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="logement-rating">
            <Ratings rating={rating} />
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipements" content={equipments} />
      </div>
    </div>
  );
};

export default LogementsDetails;
