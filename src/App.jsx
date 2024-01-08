import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HeroBanner from "./components/Organisms/HeroBanner/HeroBanner";
import Header from "./components/Organisms/Header/Header";
import { GlobalStyles } from "./styles/globalStyles";
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
      <GlobalStyles />
      <Header></Header>
      <HeroBanner></HeroBanner>
    </>
  );
}

export default App;
