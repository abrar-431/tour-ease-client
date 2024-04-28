import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllTourist from "../Components/AllTourist";
import AddTourist from "../Components/AddTourist";
import Error from "../Pages/Error";
import SpotDetails from "../Components/SpotDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/alltouristspots',
          element: <AllTourist></AllTourist>,
          loader: ()=> fetch('http://localhost:5000/spots'),
        },
        {
          path: '/addtouristspot',
          element: <AddTourist></AddTourist>
        },
        {
          path: '/spots/:id',
          element: <SpotDetails></SpotDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
        }
      ]
    },
  ]);

export default router;