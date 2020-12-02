import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logo from "../../images/logo.png";
import ButtonSwitch from "../Switch/Switch";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import InforUses from "../InforUsers/inforUses";
import Axios from "axios";
interface Props1 {
  darkMode: boolean
}
const NameUser = styled.p<Props1>`
  font-size: 28px;
  margin: auto 40px;
  color: ${p => p.darkMode ? "white" : "black"};
  // font-family: Arial, Helvetica, sans-serif !important;
  cursor: pointer;
  &:hover {
    color: #009e7f;
  }
`;
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
    backgroundLight: {
      backgroundColor: "#fff",
      padding: "20px 20px"
    },
    backgroundDark: {
      backgroundColor: "#1c1e21",
      padding: "20px 20px"
    },
    buttonLight: {
      backgroundColor: "#009e7f",
      color: "black",
      padding: "0 15px",
      height: "45px",
      fontWeight: "bold",
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "10px"
      },
      "&:hover": {
        backgroundColor: "#009e7f"
      }
    },
    buttonDark: {
      backgroundColor: "#009e7f",
     
      color: "white",
      padding: "0 15px",
      height: "45px",
      fontWeight: "bold",
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "10px"
      },
      "&:hover": {
        backgroundColor: "#009e7f"
      }
    },
    responsive: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
    },
    signUpStyle: {
      textDecoration: "none",
      color: "white",
    },
    userNameResMoblie: {
      [theme.breakpoints.down("xs")]: {
        margin: "auto !important",
        marginRight: "inherit!important",

      },
    },
    ulLight: {
      color: "black",
      "&:hover": {
        color: "#009e7f"
      }
    },
    ulBlack: {
      color: "white",
      "&:hover": {
        color: "#009e7f"
      }
    }

  })
);
interface Props {
  darkMode: boolean
  props: any;
}

const Navbar: React.FC<Props> = ({ props }) => {
  const classes = useStyles();
  const {darkMode} = props;
  const [user1, setUser] = React.useState();
  const emitRoute = () => {
    props.history.push("/signIn");
  };
  const signUpRoute = () => {
    props.history.push("/signUp");
  };

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      let userLocal: any = localStorage.getItem("user");
      let user: any = JSON.parse(userLocal);
      setUser(user);
    }
    console.log("hihi");
    
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar
          className={
            darkMode ? classes.backgroundDark : classes.backgroundLight
          }
        >
          <img src={Logo} alt="" />

          <Box p={1} flexGrow={1} className={classes.responsive}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: "20px",
              }}

            >
              <li className={darkMode ? classes.ulBlack : classes.ulLight} style={{cursor:"pointer" }} 
              onClick={()=> {
                 props.history.push("/");
              }}>Home</li>
              <li className={darkMode ? classes.ulBlack : classes.ulLight} style={{cursor:"pointer" }} 
              onClick={()=> {
                 props.history.push("/allcourse");
              }}>List Course</li>
            </ul>
          </Box>
          <ButtonSwitch/>
           {/* setBackground={setBackground}
            setBackgroundNavbar={setBackgroundNavbar} */}

          {!user1 ? (
            <span style={{ display: "flex" }}>
              <Box p={1}>
                <Button
                  className={
                    darkMode ? classes.buttonDark : classes.buttonLight
                  }
                  onClick={emitRoute}
                >
                  Sign In
                </Button>
              </Box>
              <Box p={1}>
                <Button
                  className={
                    darkMode ? classes.buttonDark : classes.buttonLight
                  }
                  onClick={signUpRoute}
                >
                  Sign up
                </Button>
              </Box>
            </span>
          ) : (
              <NameUser style={{ display: "flex" }} className={classes.userNameResMoblie} darkMode={darkMode}>
                {user1?.hoTen} <InforUses logout={logout} />
              </NameUser>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
