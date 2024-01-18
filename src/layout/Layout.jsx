import React from "react";
import { StyledLayout } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Header from "../components/Organisms/Header/Header";
import Footer from "../components/Organisms/Footer/Footer";
import { GlobalStyles } from "../styles/globalStyles";

function Layout(props) {
  return (
    <StyledLayout>
      <GlobalStyles />

      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </StyledLayout>
  );
}

export default Layout;
