import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import MyProducts from "./Pages/MyProducts.jsx";
import MyBids from "./Pages/MyBids.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Error</p>,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Registration /> },
      { path: "/login", element: <Login /> },
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
            <CreateProductForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products",
        loader: () => fetch("http://localhost:3000/allProducts"),
        element: <AllProducts />,
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: <MyBids />,
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
