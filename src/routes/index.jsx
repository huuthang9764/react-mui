/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import { Admin, Home } from "../pages";
import { DefaultLayout } from "../layouts";

const Home = React.lazy(() => import("../pages/Home"));
const Admin = React.lazy(() => import("../pages/Admin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DefaultLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'order',
        element: <h1>day la order ne</h1>
      },
      {
        path: 'accounts',
        element: <h1>day la accounts ne</h1>
      }
    ]
  },
  {
    path: "/admin",
    element: (
      <PublicRoute>
        <Admin />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <h1>day la hello ne</h1>
      },
      {
        path: 'xinchao',
        element: <h1>day la xinchao ne</h1>
      }
    ]
  },
  {
    path: "/register",
    element: <div>register</div>,
  },
]);

export default router;