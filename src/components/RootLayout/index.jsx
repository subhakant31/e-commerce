import Header from "../Organisms/Header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  <>
    <Header />
    <Outlet />
  </>;
};

export default RootLayout;
