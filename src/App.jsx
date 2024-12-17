import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./UI/MainLayout";
import LoginPage from "./Pages/Login";
import Home from "./Pages/Home";

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
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
