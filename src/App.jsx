import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Header from "./components/Organisms/Header/Header";
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
    </>
  );
}

export default App;
