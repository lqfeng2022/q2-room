import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import HomePage from "./HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
