import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Donation from './pages/Donation/Donation';
import Home from './pages/Home/Home';
import Blog from './componnets/Blogs/Blog';
import PiChart from './pages/Statistics/PiChart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('data.json')
      },
      {
        path: "/statistics",
        element: <PiChart></PiChart>
      },
      {
        path: "/cart/:id",
        element: <Blog></Blog>,
        loader: () => fetch('data.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
