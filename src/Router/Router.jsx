import {
    createBrowserRouter,
 
  } from "react-router";
  
  import React from "react";
import HomeLayout from "../components/Layout/HomeLayout";
import CategoryNews from "../components/CategoryNews";
import Home from "../components/Homelayout/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import AuthLayout from "../components/Layout/AuthLayout";
import NewsDetails from "../components/Pages/NewsDetails";
import PrivateRoutes from "../components/Provider/PrivateRoutes";
import Loading from "../components/Homelayout/Loading";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,

      children:[
        {index:true,
          element:<Home></Home>
        },
        {path:'/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader:()=> fetch('/news.json'),
          hydrateFallbackElement:<Loading></Loading>
        }


      ]
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {path:"/auth/login",
          element:<Login></Login>
        },
        {path:"/auth/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path: "/news-details/:id",
      element:<PrivateRoutes><NewsDetails></NewsDetails> </PrivateRoutes>,
      loader:()=> fetch("/news.json"),
      hydrateFallbackElement:<Loading></Loading>
    },
    {
      path: "/*",
      element: <div>not found </div>,
    },
  ]);