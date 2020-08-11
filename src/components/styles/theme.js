import { createMuiTheme } from "@material-ui/core/styles";

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
  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"],
    h3: { fontWeight: 700 },
    h6: { fontWeight: 500 },
  },
});

export default theme;
