import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";

function NotFound() {
  return (
    <Layout>
      <Grid
        container
        justify="center"
        alignItems="center"
        // style={{ width: "100vw", height: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3">Page Not Found</Typography>
          <Typography variant="subtitle1">
            The page you are looking for has been removed or relocated
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default NotFound;
