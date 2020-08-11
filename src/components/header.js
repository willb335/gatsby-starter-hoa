import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ListItem = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.text.secondary};
  &:hover {
    text-decoration: underline;
    color: ${theme.palette.text.primary};
  }`}
`;

const StyledHomeLink = styled(Link)`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.text.secondary};
  transition: color 0.6s;
  text-align: right;

  &:hover {
    color: ${theme.palette.text.primary};
  }`}
`;

const StyledHr = styled.hr`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[300]};
    `}
`;

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <header>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <StyledHomeLink to="/">
            <Typography
              variant="h4"
              color="primary"
              style={{ padding: "20px 20px 20px 0px" }}
            >
              {title}
            </Typography>
          </StyledHomeLink>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <nav>
            <ul>
              <Grid container spacing={0} justify="flex-end">
                <Grid item xs={3}>
                  <ListItem>
                    <StyledLink to="/community">
                      <StyledTypography variant="h6">
                        Community
                      </StyledTypography>
                    </StyledLink>
                  </ListItem>
                </Grid>
                <Grid item xs={3}>
                  <ListItem>
                    <StyledLink to="/news">
                      <StyledTypography
                        variant="h6"
                        style={{ paddingRight: 9 }}
                      >
                        News
                      </StyledTypography>
                    </StyledLink>
                  </ListItem>
                </Grid>
                <Grid item xs={3}>
                  <ListItem>
                    <StyledLink to="/calendar">
                      <StyledTypography variant="h6">Calendar</StyledTypography>
                    </StyledLink>
                  </ListItem>
                </Grid>
                <Grid item xs={3}>
                  <ListItem>
                    <StyledLink to="/contact">
                      <StyledTypography variant="h6">Contact</StyledTypography>
                    </StyledLink>
                  </ListItem>
                </Grid>
              </Grid>
            </ul>
          </nav>
        </Grid>
      </Grid>
      <StyledHr></StyledHr>
    </header>
  );
}

export default Header;

const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  padding: 0;
  margin: 0;
`;

const StyledMobileHeader = styled.header`
  margin-top: 10px;
`;

const MobileLink = styled(Link)`
  ${({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.text.primary} !important;
  `}
`;

export function MobileHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMobileHeader>
      <StyledAppBar position="static" color="transparent">
        <Toolbar style={{ padding: "0 0 0 2.5vw" }}>
          <IconButton
            edge="start"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ padding: "0 4px 0 0" }}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <MobileLink to="/">
                <Typography variant="h6" color="textPrimary">
                  Home
                </Typography>
              </MobileLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <MobileLink to="/community">
                <Typography variant="h6" color="textPrimary">
                  Community
                </Typography>
              </MobileLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <MobileLink to="/news">
                <Typography variant="h6" color="textPrimary">
                  News
                </Typography>
              </MobileLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <MobileLink to="/calendar">
                <Typography variant="h6" color="textPrimary">
                  Calendar
                </Typography>
              </MobileLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <MobileLink to="/contact">
                <Typography variant="h6">Contact</Typography>
              </MobileLink>
            </MenuItem>
          </Menu>
          <Typography variant="h6" color="textPrimary">
            Menu
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledHr></StyledHr>
    </StyledMobileHeader>
  );
}
