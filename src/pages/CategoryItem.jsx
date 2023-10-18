import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryItem = () => {
    const id = useParams();

    const [item, setItem] = useState()

    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id.id}`)
        .then((response) => response.json())
        .then((data) => setItem(data.meals));
    }, [id]);

   

  return (
    <>
      <div>
        <div className="container mx-auto flex justify-between gap-5 flex-wrap">
          {item?.map((i) => (
            <div key={i.idMeal}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={i.strMealThumb} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{i.strMeal}</h2>
                  {/* <p>{props.data?.strCategoryDescription}</p> */}
                  <div className="card-actions justify-end">
                    <Link to={`/${id.id}/${i.idMeal}`} className="btn btn-primary">
                      Show
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
