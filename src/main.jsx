import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Category from './components/Header/Category/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,


    children : [ {

      path : 'category/:id',
      element : <Category></Category>,
      loader : ({params}) => fetch (`https://travel-guru-server-rayhanuddinfarhad.vercel.app/category/${params.id}`)
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
