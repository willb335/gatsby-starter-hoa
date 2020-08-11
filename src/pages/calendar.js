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
        events: edges {
          event: node {
            allDay
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

  const { events } = data.allContentfulCalendar;
  const calendarEvents =
    events.length &&
    events.map(({ event }) => {
      const start = moment(event.start).toDate();
      const end = moment(event.end).toDate();
      const id = event.id;
      const title = event.title;
      const allDay = event.allDay;
      const description = event.description.description;

      return {
        id,
        title,
        start,
        end,
        allDay,
        description,
      };
    });

  return (
    <Layout>
      <Seo
        title="HOA Calendar"
        description="See a calendar of upcoming events"
      />
      <Grid container spacing={3} style={{ marginBottom: "5rem" }}>
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            HOA Calendar
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "1rem" }}>
          <Paper elevation={5}>
            <BigCalendar events={calendarEvents} />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Calendar;
