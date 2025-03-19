import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./routes/layouts/mainLayout.jsx";
import ErrorPage from "./error-page.jsx";

// Lazy load components
const ProductsList = lazy(() => import("./routes/productsList.jsx"));
const ProductDetail = lazy(() => import("./routes/productDetails.jsx"));
const Cart = lazy(() => import("./routes/cart.jsx"));
const Register = lazy(() => import("./routes/register.jsx"));

// Lazy load loaders
const getProductsListLoader = async ({ request }) => {
  const { loader } = await import("./routes/productsList.jsx");
  return loader({ request });
};

const getProductDetailLoader = async ({ params }) => {
  const { loader } = await import("./routes/productDetails.jsx");
  return loader({ params });
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsList />,
        loader: getProductsListLoader,
      },
      {
        path: "/:productId",
        element: <ProductDetail />,
        loader: getProductDetailLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
