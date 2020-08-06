import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import BigCalendar from "../components/calendar";

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
      //   const start = moment(item.start).format("dddd, MMMM Do YYYY, h:mm:ss a");
      //   const end = moment(item.end).format("dddd, MMMM Do YYYY, h:mm:ss a");
      const start = moment(item.start).toDate();
      const end = moment(item.end).toDate();
      console.log("start year", start);
      console.log("end year", end);

      return {
        id: item.id,
        title: item.title,
        start,
        end,
        allDay: item.allDay,
        description: item.description.description,
      };
    });

  console.log("events", events);

  return (
    <Layout>
      <BigCalendar events={events} />
    </Layout>
  );
}

export default Calendar;
