import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DashBoardPage from "./pages/DashBoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" replace />,
      },
      {
        path: "/category/:id",
        element: <HomePage />,
      },
      {
        path: "/product/:product_id",
        element: <ProductPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
    ],
  },
]);

export default router;
