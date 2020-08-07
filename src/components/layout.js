import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
} from "@material-ui/core/styles";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header, { MobileHeader } from "./header";
import Footer from "./footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#2d3748",
      secondary: "#5f6c80",
    },
  },
});

const ContentContainer = styled.div`
  padding-bottom: 5rem;
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

function Layout({ children }) {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <PageContainer>
            {matches ? <MobileHeader /> : <Header />}
            <ContentContainer> {children}</ContentContainer>
            <Footer />
          </PageContainer>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Layout;
