import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Home from "./components/pages/home/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
