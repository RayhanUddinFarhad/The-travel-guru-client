import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Category from './components/Header/Category/Category.jsx';
import Booking from './components/Shared/Booking.jsx';
import BookingCatDetails from './components/Shared/BookingCatDetails.jsx';
import LogIn from './components/Pages/LogIn.jsx';
import Registration from './components/Pages/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,


    children : [ {

      path : 'category/:id',
      element : <Category></Category>,
      loader : ({params}) => fetch (`https://travel-guru-server-rayhanuddinfarhad.vercel.app/category/${params.id}`)
    },

  
  
  ]
  },

  {

    path : "booking",
    element : <Booking></Booking>,


    children : [ {

      path : ':id',
      element : <BookingCatDetails></BookingCatDetails>,
      loader : ({params}) => fetch (`https://travel-guru-server-rayhanuddinfarhad.vercel.app/category/${params.id}`)




     }],
  },

  {
    path : "/logIn",
    element : <LogIn></LogIn>,


  },
  { 


    path : "/register",
    element : <Registration></Registration>
  }


  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
