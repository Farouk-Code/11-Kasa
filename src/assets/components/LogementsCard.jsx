import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LogementsCard = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/logements/${id}`);
  };

  return (
    <div className="logements-card" data-id={id} onClick={handleCardClick}>
      <div className="card-cover">
        {console.log(cover)}
        <img src={cover} alt={title} />
        <div className="card-content">{title}</div>
      </div>
    </div>
  );
};

export default LogementsCard;
