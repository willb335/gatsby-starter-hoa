import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
