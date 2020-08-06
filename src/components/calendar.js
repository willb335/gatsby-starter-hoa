import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function BigCalendar({ events }) {
  console.log("ev", events);
  const eventing = [
    {
      id: 0,
      title: "All Day Event very long title",
      description: "Where does the description show up",
      allDay: true,
      start: new Date(2020, 7, 5),
      end: new Date(2020, 7, 5),
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2020, 7, 6, 2, 30),
      allDay: false,
      end: new Date(2020, 7, 6, 3),
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        titleAccessor={e => e.title}
        onSelectEvent={(obj, e) => <div>Hello WOrld</div>}
        views={{
          month: true,
          week: true,
        }}
      />
    </div>
  );
}

export default BigCalendar;
