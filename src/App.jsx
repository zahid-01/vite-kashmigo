import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./UI/MainLayout";
import LoginPage from "./Pages/Login";
import Home from "./Pages/Home";
import TourPage from "./Pages/TourPage";
import Checkout from "./Pages/Checkout";
import SuccessBooking from "./Pages/Success";
import TaxiServices from "./Pages/TaxiServices";
import AboutUs from "./Pages/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/tour",
        element: <TourPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <SuccessBooking />,
      },
      {
        path: "/taxi-services",
        element: <TaxiServices />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
