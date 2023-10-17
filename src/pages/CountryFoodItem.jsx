import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryFoodItem = () => {

     const id = useParams();

     const [item, setItem] = useState();

     useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id.id}`)
         .then((response) => response.json())
         .then((data) => setItem(data.meals));
     }, [id]);

    console.log(id.id);
  return (
    <div className="container mx-auto mt-5 flex justify-between gap-5 flex-wrap">
      {item?.map((food) => (
        <div className="div" key={food.idMeal}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={food.strMealThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.strMeal}</h2>

              <div className="card-actions justify-end">
                <Link className="btn btn-primary">Show</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryFoodItem;
