import { useNavigate } from "react-router-dom";

const IndegrientMeal = ({data}) => {
    const {
      strMeal,
      strMealThumb,
      strInstructions,
      strCategory,
      strArea,
      strYoutube,
      strTags,
    } = data;

    const navigate= useNavigate()

    const back = () => {
        navigate(-1)
    }
    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full align-top">
            <img src={strMealThumb} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-700 font-bold text-4xl">
              {strMeal}
            </h2>
            <h3 className="card-title">Category: {strCategory}</h3>
            <h3 className="card-title">Country: {strArea}</h3>
            <p>{strInstructions}</p>
            <div className="card-actions justify-start mt-5">
              <iframe
                className="w-full h-96"
                src={strYoutube}
                frameborder="0"
              ></iframe>
              <div className="w-full flex justify-between">
                <button className="btn">
                  Tags
                  <div className="badge badge-secondary">{strTags}</div>
                </button>

                <button className="btn btn-outline btn-accent" onClick={back}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default IndegrientMeal;