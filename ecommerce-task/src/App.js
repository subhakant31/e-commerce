import React from "react";
import  ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout /> ,
      children: [
        {
          path: "/",
        },
        {
          path: "/",
        }
      ],
    },
  ]);
  return (
   <div>
     <RouterProvider router={router} />
   </div>
  );
}

export default App;
