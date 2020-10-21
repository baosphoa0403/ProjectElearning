import React from "react";
import Toggle from "react-toggle";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../Switch/switch.css";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";
import * as action from "./modules/Actions/Action";
function ButtonSwitch(props: any) {
  console.log(props.darkMode);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        margin: "-6px -6px",
        color: props.darkMode ? "" : "#ff9800"
      },
      switch: {
        [theme.breakpoints.between("xs", "sm")]: {
          display: "none"
        }
      }
    })
  );

  const classes = useStyles();
  return (
    <label>
      <Toggle
        className={classes.switch}
        defaultChecked={props.darkMode}
        icons={{
          checked: <Brightness3Icon className={classes.root} />,
          unchecked: <WbSunnyRoundedIcon className={classes.root} />
        }}
        onChange={()=>{ 
          props.emitDarkMode(!props.darkMode)
        }}
      />
    </label>
  );
}
// type ReduxType = ReturnType<typeof mapStateToProps>;
const mapDispatchToProps = (dispatch: any) => {
      return {
         emitDarkMode: (value: any) => {           
             dispatch(action.changeDarkMode(value))
         }
      }
}
const mapStateToProps = (state: rootState) => {
     return {
       darkMode: state.reducerSwitch.darkMode
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSwitch);
