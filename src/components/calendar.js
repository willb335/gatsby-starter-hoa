import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function BigCalendar({ events }) {
  const [event, setEvent] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSelectEvent = (obj, event) => {
    setAnchorEl(event.currentTarget);
    setEvent(obj);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item m xs={12} m={12}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "80vh", maxWidth: 1333, marginBottom: "5vh" }}
          titleAccessor={e => e.title}
          onSelectEvent={(obj, e) => handleSelectEvent(obj, e)}
          views={{ month: true, week: true }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: 20, textAlign: "center" }}
          >
            <Grid item xs={12} m={6}>
              <Typography variant="h6">{event.title}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography variant="body1">{event.description}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography variant="body1">{event.start?.toString()}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography variant="body1">{event.end?.toString()}</Typography>
            </Grid>
          </Grid>
        </Popover>
      </Grid>
    </Grid>
  );
}

export default BigCalendar;
