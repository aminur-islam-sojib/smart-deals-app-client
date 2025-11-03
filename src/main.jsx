import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Registration from "./Pages/Registration.jsx";
import Login from "./Pages/Login.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage.jsx";
import CreateProductForm from "./Pages/CreateProducts.jsx";
import { ToastContainer } from "react-toastify";
import AllProducts from "./Pages/AllProducts.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: <ProductsDetailsPage />,
      },
      {
        path: "/create-products",
        element: (
          <PrivateRoute>
            <CreateProductForm />,
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products",
        loader: () => fetch("http://localhost:3000/allProducts"),
        element: <AllProducts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
