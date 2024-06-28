// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Content from "./router/content";
import Contact from "./router/Contact";
import TodoList from "./router/todolist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:'/',
      element:<Content/>
      },
      {
        path: "/about",
        element: <Content/>
      },
      {
        path: "/Contact",
        element :<Contact/>
      },
      {
        path:"/daftartugas",
        element:<TodoList/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);