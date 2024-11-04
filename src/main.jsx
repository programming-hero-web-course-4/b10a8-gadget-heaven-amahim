import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
          path: "/",
          element: <Home/>
      },
      {
          path: "dashboard",
          element: <Dashboard/>
      },
      {
          path: "Statistics",
          element: <Statistics/>
      },
      {
        path: "gadgetnews",
        element: <GadgetNews/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
