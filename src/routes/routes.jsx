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
          element: <AllTourist></AllTourist>
        },
        {
          path: '/addtouristspot',
          element: <AddTourist></AddTourist>
        }
      ]
    },
  ]);

export default router;