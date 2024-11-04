import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Stats/Statistics.jsx';
import GadgetNews from './Components/GadgetNews/GadgetNews.jsx';
import DetailsPage from './Components/DetailsPage/DetailsPage.jsx';
import Products from './Components/Products/Products.jsx';

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
        element: <Dashboard />
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "gadgetnews",
        element: <GadgetNews />
      },
      {
        path: 'products/:id',
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

