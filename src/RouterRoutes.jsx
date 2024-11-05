import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DashBoardPage from "./pages/DashBoardPage";
import CartDash from "./component/CartDash";
import WishlistDash from "./component/WishlistDash";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import Contact from "./component/Contact";
import Feedback from "./component/Feedback";

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
            path: "category/:id",
          },
        ],
      },
      {
        path: "product/:product_id",
        element: <ProductPage />,
      },
      {
        path: "dashboard",
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
      {
        path: "contact",
        element: <ContactPage />,
        children: [
          {
            path: "",
            element: <Navigate to="/contact/contact" replace />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
