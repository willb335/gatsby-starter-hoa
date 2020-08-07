import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./header";
import Footer from "./footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2d3748",
    },
    secondary: {
      main: "#5f6c80",
    },
    text: {
      primary: "#000000",
      secondary: "#2d3748",
    },
  },
});

function Layout({ children }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Layout;
