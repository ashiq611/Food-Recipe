

const Meal = (props) => {
  
    return (
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={props.data?.strMealThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.data?.strMeal}</h2>
            <p>{props.data?.strInstructions}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Meal;