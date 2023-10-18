import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndegrientMeal from "../components/IndegrientMeal";

const Indegrient = () => {
  const [indegrient, setIndegrient] = useState();

  const type = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${type.type}`)
      .then((response) => response.json())
      .then((data) => setIndegrient(data.meals));
  }, []);

  return (
    <div className="container mx-auto">
      {indegrient?.map((meal) => (
        <IndegrientMeal data={meal} key={meal.idMeal} />
      ))}
    </div>
  );
};

export default Indegrient;
