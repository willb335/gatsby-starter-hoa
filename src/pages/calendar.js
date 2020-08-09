import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import Paper from "@material-ui/core/Paper";

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
        title="HOA Calendar"
        description="See a calendar of upcoming events"
      />
      <Paper elevation={5}>
        <BigCalendar events={events} />
      </Paper>
    </Layout>
  );
}

export default Calendar;
