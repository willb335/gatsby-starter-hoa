import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import "react-big-calendar/lib/css/react-big-calendar.css";

const StyledCalendar = styled(Calendar)`
  ${({ theme }) => `
  & .rbc-event-content {
    background-color: ${theme.palette.primary.main};
    outline: ${theme.palette.primary.main};
  }
  & .rbc-event {
    background-color: ${theme.palette.primary.main};
    outline: ${theme.palette.primary.main};
    border: ${theme.palette.primary.main};
  }
  & .rbc-event:focus {
    outline: ${theme.palette.primary.main};
  }
  & .rbc-now {
    background-color: ${theme.palette.primary.light};
  }
  & .rbc-current {
    background-color: ${theme.palette.primary.light};
  }
  & .rbc-today {
    background-color: ${theme.palette.primary.light};
  }

  & .rbc-active {
    outline: ${theme.palette.primary.main};
    background-color: black;
  }

  & .rbc-toolbar button {
    outline: ${theme.palette.primary.main}
  }
  `}
`;

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
      <Grid item xs={12} m={12}>
        <StyledCalendar
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
            style={{
              padding: 25,
              textAlign: "center",
              width: 500,
            }}
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
