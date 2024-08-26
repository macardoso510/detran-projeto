import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export default function MainAppBar() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
