import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
// import Toggle from "react-toggle";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
export default function Navbar() {
  const classes = useStyles();
  // var Toggle = require("react-toggle");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
          <Box p={1} flexGrow={1}>
            <Typography variant="h6" align="left">
              Elearning
            </Typography>
          </Box>
          <WbSunnyIcon />

          <Box p={1}>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
