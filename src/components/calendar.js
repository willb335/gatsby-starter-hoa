import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const StyledGrid = styled(Grid)`
  padding: 20px;
`;

function BigCalendar({ events }) {
  const [event, setEvent] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSelectEvent = (obj, event) => {
    setAnchorEl(event.currentTarget);

    setEvent(obj);
    console.log(obj);
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
          style={{
            height: "80vh",
            maxWidth: "90vw",
            marginLeft: "calc(50% - 45vw)",
          }}
          titleAccessor={e => e.title}
          onSelectEvent={(obj, e) => handleSelectEvent(obj, e)}
          views={{
            month: true,
            week: true,
          }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <StyledGrid container justify="center" alignItems="center">
            <Grid item xs={12} m={6}>
              <Typography>{event.title}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography>{event.description}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography>{event.start?.toString()}</Typography>
            </Grid>
            <Grid item xs={12} m={6}>
              <Typography>{event.end?.toString()}</Typography>
            </Grid>
          </StyledGrid>
        </Popover>
      </Grid>
    </Grid>
  );
}

export default BigCalendar;
