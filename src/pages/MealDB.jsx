import { useEffect, useState } from "react";
import Meal from "../components/Meal";

const MealDB = () => {
  const [meals, setMeals] = useState();
  const [search, setSearch] = useState();

  const searchMeal = (e) => {
    if (e.key == "Enter") {
      
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then((response) => response.json())
          .then((data) => setMeals(data?.meals));

        //   useEffect(() => {
        //     fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        //       .then((response) => response.json())
        //       .then((data) => setMeals(data.meals));
        //   }, [search]);
      
    }
  };

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//       .then((response) => response.json())
//       .then((data) => setMeals(data.meals));
//   }, []);

  console.log(meals)

  return (
    <div className="container mx-auto">
      <div className="form-control flex justify-center ">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 text-center md:w-[400px]"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={searchMeal}
        />
      </div>
      <div className="flex justify-between gap-3 mt-5 flex-wrap">
        {
            (meals == null) ? <p className="text-white">Not Found</p> : meals.map((meal) => (
                
                    <Meal data={meal} key={meal.idMeals}/>
               
            ))
        }
      </div>
      {/* <Meal item={meals.meals} /> */}
    </div>
  );
};

export default MealDB;
