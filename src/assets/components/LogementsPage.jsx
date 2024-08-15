import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import LogementsDetails from "../components/LogementsDetails";
import Error from "../components/Error";
import data from "../data/data.json";

const LogementsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = data.find((logement) => logement.id === id);
    if (!selectedLogement) {
      navigate("/404");
    } else {
      setLogement(selectedLogement);
    }
  }, [id, navigate]);

  if (!logement) {
    return <Error />;
  }

  const { pictures } = logement;

  return (
    <div>
      <Slider images={pictures} />
      <LogementsDetails logement={logement} />
    </div>
  );
};

export default LogementsPage;
