
import { Link } from "react-router-dom";
const Category = (props) => {

    return (
      <div>
        <div className="card card-compact w-96 bg-cyan-950 shadow-xl">
          <figure>
            <img src={props.data?.strCategoryThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.data?.strCategory}</h2>
            {/* <p>{props.data?.strCategoryDescription}</p> */}
            <div className="card-actions justify-end">
              <Link
                to={`/${props.data?.strCategory}`}
                className="btn btn-primary"
              >
                Show
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Category;