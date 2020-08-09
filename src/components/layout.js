import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
      light: "rgba(0, 0, 0, 0.1)",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#2d3748",
      secondary: "#5f6c80",
    },
  },
  typography: { h3: { fontWeight: 700 } },
});

const ContentContainer = styled.div`
  padding-bottom: 5rem;
  margin: 5vh 0 0 0;
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-left: 5vw;
  padding-right: 5vw;
  max-width: 1366px;

  @media (min-width: 1366px) {
    width: 1366px;
    margin: 0 auto;
  }
`;

function Layout({ children }) {
  const mobile = useMediaQuery("(max-width:960px)");

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <PageContainer>
          {mobile ? <MobileHeader /> : <Header />}
          <ContentContainer> {children}</ContentContainer>
          <Footer />
        </PageContainer>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default Layout;
