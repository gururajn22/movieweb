import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Movie from "./src/components/Movie";
import Error from "./src/components/Error";
import Product from "./src/components/Product";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AboutClass from "./src/components/AboutClass";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Router1 = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Movie />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router1} />);
