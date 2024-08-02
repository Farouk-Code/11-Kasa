import LogementsCard from "./LogementsCard";
import LogementsData from "../data/data.json";

const LogementMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {LogementsData.map((logement) => {
          // console.log(logement.cover);
          return <LogementsCard key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />;
        })}
      </div>
    </div>
  );
};

export default LogementMenu;
