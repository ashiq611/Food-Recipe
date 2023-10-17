
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-2xl">Food-Recipe🍟</a>
          </div>
          <div className="flex-none gap-20 text-xl font-bold text-violet-50">
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/mealdb">Find Food</NavLink>
            </div>
            <div>
              <NavLink to="/countryFood">Country</NavLink>
            </div>
            <div>
              <NavLink to="/kanye">Kanye</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;