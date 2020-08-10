import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import BigCalendar from "../components/calendar";
import Seo from "../components/seo";

function Calendar() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCalendar {
        items: edges {
          item: node {
            allDay
            contentful_id
            id
            start
            end
            description {
              description
            }
            title
          }
        }
      }
    }
  `);

  const { items } = data.allContentfulCalendar;
  const events =
    items.length &&
    items.map(({ item }) => {
      const start = moment(item.start).toDate();
      const end = moment(item.end).toDate();

      return {
        id: item.id,
        title: item.title,
        start,
        end,
        allDay: item.allDay,
        description: item.description.description,
      };
    });

  return (
    <Layout>
      <Seo
        title="Cicero HOA Calendar"
        description="See a calendar of upcoming events"
      />
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            Cicero HOA Calendar
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={5} style={{}}>
            <BigCalendar events={events} />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Calendar;
