import {
    createBrowserRouter,
 
  } from "react-router";
  
  import React from "react";
import HomeLayout from "../components/Layout/HomeLayout";
import CategoryNews from "../components/CategoryNews";
import Home from "../components/Homelayout/Home";
 
  
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
          loader:()=> fetch('/news.json')}

      ]
    },
    {
      path: "/auth",
      element: <div>Hello World</div>,
    },
    {
      path: "/news",
      element: <div>Hello new</div>,
    },
    {
      path: "/*",
      element: <div>not found </div>,
    },
  ]);