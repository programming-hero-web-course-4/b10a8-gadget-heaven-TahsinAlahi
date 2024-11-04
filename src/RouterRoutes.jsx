import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DashBoardPage from "./pages/DashBoardPage";
import CartDash from "./component/CartDash";
import WishlistDash from "./component/WishlistDash";

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
      {
        path: "/dashboard",
        element: <DashBoardPage />,
        children: [
          {
            path: "",
            element: <Navigate to="/dashboard/cart" replace />,
          },
          {
            path: "cart",
            element: <CartDash />,
          },
          {
            path: "wishlist",
            element: <WishlistDash />,
          },
        ],
      },
    ],
  },
]);

export default router;
