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
  text-align: center;

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
            <Typography variant="h4" color="primary" style={{ padding: 20 }}>
              {title}
            </Typography>
          </StyledHomeLink>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <nav>
            <ul>
              <Grid container spacing={1} justify="space-between">
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
                      <StyledTypography variant="h6">News</StyledTypography>
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
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
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
              <StyledLink to="/">
                <StyledTypography variant="body1" color="textPrimary">
                  Home
                </StyledTypography>
              </StyledLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <StyledLink to="/community">
                <StyledTypography variant="body1" color="secondary">
                  Community
                </StyledTypography>
              </StyledLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <StyledLink to="/news">
                <StyledTypography variant="body1" color="secondary">
                  News
                </StyledTypography>
              </StyledLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <StyledLink to="/calendar">
                <StyledTypography variant="body1" color="secondary">
                  Calendar
                </StyledTypography>
              </StyledLink>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <StyledLink to="/contact">
                <StyledTypography variant="body1" color="secondary">
                  Contact
                </StyledTypography>
              </StyledLink>
            </MenuItem>
          </Menu>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledHr></StyledHr>
    </StyledMobileHeader>
  );
}
