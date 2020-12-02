import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: "#00695c"
    },
    title: {
      flexGrow: 1,
    },
  }),
);
export default function NavbarAdmin(props: any) {
  const classes = useStyles();
  const [detail, setDetail] = useState();
  useEffect(() => {
    if (localStorage.getItem("userAdmin")) {
      let userAdminLocal: any = localStorage.getItem("userAdmin");
      if (userAdminLocal) {
        var user = JSON.parse(userAdminLocal);
      }
      setDetail(user);
    }
  }, []);

  let history = useHistory();
  let logoutAdmin = () => {
    setTimeout(() => {
      history.replace("/")
      localStorage.removeItem("userAdmin");
    }, 1000)
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#00e676" }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {detail?.hoTen}
          </Typography>
          <Typography variant="h6" className={classes.title}>

            {/* Dashboard User */}
            <NavLink
              style={{ textDecoration: "none" }}
              to="/admin/dashboard"
              exact
            >
              DashBoard USER
          </NavLink>

          </Typography>
          <Typography variant="h6" className={classes.title}>

            {/* Dashboard Course */}
            <NavLink
              style={{ textDecoration: "none" }}
              to="/admin/dashboardCourse"
              exact
            >
              DashBoard Course
          </NavLink>

          </Typography>
          <Button color="inherit" style={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
            onClick={logoutAdmin}
          >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
