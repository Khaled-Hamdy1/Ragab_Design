import ErrorBoundary from "@/components/ErrorBoundary";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/",
        Component: Landing,
      },
    ],
  },
]);
