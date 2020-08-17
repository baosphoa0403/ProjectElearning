import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Logo from "../../images/logo.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    background: {
      backgroundColor: "#fff",
      padding: "20px 20px"
    },
    button: {
      backgroundColor: "#009e7f",
      color: "white",
      padding: "0 15px",
      height: "45px",
      fontWeight: "bold",
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: "10px"
      },
      "&:hover": {
        backgroundColor: "#009e7f"
      } 
    }
  })
);
export default function Navbar() {
  const classes = useStyles();
  // var Toggle = require("react-toggle");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.background}>
             <img src={Logo}/>
          <Box p={1} flexGrow={1} ></Box>
          <Box p={1}>
            <Button className={classes.button}>Đăng Nhập</Button>
          </Box>
          <Box p={1} >
            <Button className={classes.button}>Đăng Ký</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
