import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Stats/Statistics.jsx';
import GadgetNews from './Components/GadgetNews/GadgetNews.jsx';
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx';
import Products from './Components/Products/Products.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Products />,
            loader: () => fetch('/products.json')
          },
          {
            path: 'products/:category',
            element: <Products />,
            loader: () => fetch('/products.json')
          }
        ]
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Navigate to="cart" replace />
          },
          {
            path: "cart",
            element: <Cart /> 
          },
          {
            path: "wishlist",
            element: <Wishlist /> 
          }
        ]
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "gadgetnews",
        element: <GadgetNews />,
        loader: () => fetch('/news.json')
        
      },
      {
        path: 'product/:id',
        element: <DetailsPage />,
        loader: () => fetch('/products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
