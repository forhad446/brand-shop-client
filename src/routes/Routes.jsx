import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import SingleBrandDetails from "../components/Our Brand/SingleBrandDetails";
import MyCart from "../pages/Mycart";

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
        element: <AddProduct></AddProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/myCart')
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