import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import Homepage from "../pages/homepage/Homepage";
import CarRental from "../pages/car-rental/CarRental";

const AppRoute = () => {
  //   const isAuthenticated = localStorage.getItem("token");
  //   const routing = useRoutes([
  //     {
  //       path: '/',
  //       element: <HomeLayout />,
  //       children: homeRoutes
  //     },

  //   ]);

  //   return routing;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/car", 
      element: <CarRental />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};



export default AppRoute;
