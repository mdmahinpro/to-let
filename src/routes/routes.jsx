import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import SingleProductDetails from "../components/SingleProductDetails";
import AddNewProduct from "../components/dashboard/AddNewProduct";
import ManageAllProducts from "../components/dashboard/ManageAllProducts";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout wraps around child components
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Root path
        element: <Home />, // Home component
      },
      {
        path: "contact", // Contact path
        element: <Contact />, // Contact component
      },
      {
        path: "login", // Login path
        element: <Login />, // Login component
      },
      {
        path: "register", // Registration path
        element: <Registration />, // Registration component
      },
      {
        path: "/products/:id",
        element: <SingleProductDetails />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/products/${params.id}`
          );
          if (!response.ok) {
            throw new Error(`Could not fetch product with id ${params.id}`);
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-products",
        element: (
          <PrivateRoute>
            <ManageAllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoute>
            <AddNewProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
