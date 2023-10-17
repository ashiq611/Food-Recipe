import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryFood = () => {
    const [cFood, setCFood] = useState();

     useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
         .then((response) => response.json())
         .then((data) => setCFood(data?.meals));
     }, []);
      

    //  console.log(cFood.at(0));

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Country Wise Food</h1>
      <div className="container mx-auto mt-5 flex justify-between gap-5 flex-wrap">
        {cFood?.map((country) => (
          <div className="card card-compact w-96 bg-cyan-950 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{country.strArea}</h2>
              <div className="card-actions justify-end">
                <Link
                  to={`/countryFood/${country.strArea}`}
                  className="btn btn-primary"
                >
                  Show
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryFood;
