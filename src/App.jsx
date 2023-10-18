
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MealDB from './pages/MealDB';
import Kanye from './pages/Kanye';
import CategoryItem from './pages/CategoryItem';
import CountryFood from './pages/CountryFood';
import CountryFoodItem from './pages/CountryFoodItem';
import Indegrient from './pages/Indegrient';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <CategoryItem />,
        },
        {
          path: "mealdb",
          element: <MealDB />,
        },
        {
          path: "countryFood",
          element: <CountryFood />,
        },
        {
          path: "countryFood/:id",
          element: <CountryFoodItem />,
        },
        {
          path: "/:id/:type",
          element: <Indegrient/>,

        },
        {
          path: "kanye",
          element: <Kanye />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
