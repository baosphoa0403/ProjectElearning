import React from "react";
import Toggle from "react-toggle";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { makeStyles } from "@material-ui/core/styles";
import "../Switch/switch.css"
interface Props {
  setBackground: (value: boolean) => void;
  setBackgroundNavbar: (value: boolean) => void;
}

export default function Switch(props: Props) {
  const [darkMode, setDarkMode] = React.useState(false);
  const useStyles = makeStyles({
    root: {
      margin: "-6px -6px",
      color: darkMode ? "" : "#ff9800",
    },
  });

  const classes = useStyles();
  return (
    <label>
      <Toggle
        defaultChecked={darkMode}
        icons={{
          checked: <Brightness3Icon className={classes.root} />,
          unchecked: <WbSunnyRoundedIcon className={classes.root} />,
        }}
        onChange={() => {
          setDarkMode(!darkMode);
          props.setBackground(!darkMode);
          props.setBackgroundNavbar(!darkMode);
        }}
      />
    </label>
  );
}
