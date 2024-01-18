import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import UserCartPage from "./components/Pages/UserCartPage/UserCartPage";
import ProductsDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";
import ProductsListPage from "./components/Pages/ProductsListPage/ProductsListPage";
import HomePage from "./components/Pages/HomePage/HomePage";

const routes = [
  {
    path: "/",

    element: <Layout />,
    children: [
      {
        path: "/usercart",
        element: <UserCartPage />,
      },

      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsListPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
