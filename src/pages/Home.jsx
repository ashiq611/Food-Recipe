import { useEffect, useState } from "react";
import Category from "../components/Category";

const Home = () => {
  const [cats, setCats] = useState();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => setCats(data?.categories));
  }, []);


  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Category</h1>
      <div className="container mx-auto mt-5 flex justify-between gap-5 flex-wrap">
        {cats?.map((category) => (
          <Category key={category.idCategory} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
