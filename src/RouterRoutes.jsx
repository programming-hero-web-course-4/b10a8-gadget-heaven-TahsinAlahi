import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/category/:id",
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
