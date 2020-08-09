import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";

import Seo from "../components/seo";

function NotFound() {
  return (
    <Layout>
      <Seo
        title="Not found"
        description="The page you are looking for has been removed or relocated"
      ></Seo>
      <Grid container justify="center" alignItems="center">
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
