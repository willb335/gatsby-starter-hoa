import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";

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
      <BigCalendar events={events} />
    </Layout>
  );
}

export default Calendar;
