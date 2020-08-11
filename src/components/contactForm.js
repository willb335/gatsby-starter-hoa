import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const FlexContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  ${({ theme }) => ` margin: ${theme.spacing(3, 0, 2)};`}
`;

function ContactForm() {
  return (
    <FlexContainer>
      <Typography variant="h5" color="primary">
        Contact Us
      </Typography>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        noValidate
        action="/success"
      >
        {/* Hidden Inputs for Netlify Forms */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="text"
          id="name"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          type="text"
          label="Message"
          name="message"
          multiline
          rows={10}
        />
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </StyledButton>
      </form>
    </FlexContainer>
  );
}

export default ContactForm;
