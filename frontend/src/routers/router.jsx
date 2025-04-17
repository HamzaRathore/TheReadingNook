import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import App from "../App";
import About from "../pages/About";
import SingleBook from "../pages/Shop/SingleBook";
import Shop from "../pages/Shop/Shop";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/books/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const res = await fetch(`https://thereadingnook-production.up.railway.app/books/${params.id}`);
          const data = await res.json();
          return data.book; // 👈 make sure only the actual book object is returned
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "upload",
        element: <UploadBooks />,
      },
      {
        path: "manage",
        element: <ManageBooks />,
      },
      {
        path: "edit-books/:id",
        element: <EditBooks />,
        loader: async ({ params }) => {
          const res = await fetch(`https://thereadingnook-production.up.railway.app/books/${params.id}`);
          const data = await res.json();
          return data.book; // 👈 make sure only the actual book object is returned
        },
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
