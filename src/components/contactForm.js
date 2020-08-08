import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FlexContainer = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    margin: ${theme.spacing(3, 0, 2)};
`}
`;

function ContactForm() {
  const { register, handleSubmit } = useForm();

  return (
    <Container component="main" maxWidth="xs" style={{ padding: 0 }}>
      <CssBaseline />
      <FlexContainer>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form
          style={{ width: "100%" }}
          noValidate
          onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
        >
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
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
            inputRef={register}
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
            inputRef={register}
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
    </Container>
  );
}

export default ContactForm;
