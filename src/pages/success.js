import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";

import Seo from "../components/seo";

function Success() {
  return (
    <Layout>
      <Seo
        title="Success"
        description="You have successfully submitted the contact form"
      ></Seo>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3">Success</Typography>
          <Typography variant="subtitle1">
            Thank you! We will be in contact as soon as possible
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Success;
