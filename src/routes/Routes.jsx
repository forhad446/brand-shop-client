import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import SingleBrandDetails from "../components/Our Brand/SingleBrandDetails";
import MyCart from "../pages/Mycart";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import MyCardDetails from "../pages/MyCardDetails";
import UpdateUser from "../pages/UpdateUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add_Product",
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/myCart')
      },
      {
        path: "/myCardDetails/:id",
        element: <PrivateRoute><MyCardDetails /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/myCart')
      },
      {
        path: "/updateUser/:id",
        loader: () => fetch('http://localhost:5000/myCart'),
        element: <PrivateRoute><UpdateUser /></PrivateRoute>
      },
      {
        path: "/singleBrandDetails/:BrandName",
        element: <SingleBrandDetails></SingleBrandDetails>,
        loader: () => fetch('./product_data.json')
      }
    ]
  },
]);

export default routes;