import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ResearchPage from "./pages/research-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/about",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/research",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ResearchPage />,
      },
    ],
  },
]);
