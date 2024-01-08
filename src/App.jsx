import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Header from "./components/Organisms/Header/Header";
import Footer from './components/Organisms/Footer/Footer';
import "./App.css";
import { Card } from "./components/Molecules/Card/Card";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
        },
        {
          path: "/",
        },
      ],
    },
  ]);

  return (
    <>
      <Header></Header>
      <Card />
      <Footer />
    </>
    // <div>
    //   <RouterProvider router={router} />
    // </div>
  );
}

export default App;
