import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import JsIcon from "./component-icons/jsicon";
import Nodejs from "./component-icons/nodejs";
import FullStack from "./component-icons/fullstack";
import Reactjs from "./component-icons/react";
import Angular from "./component-icons/angular";
import Golang from "./component-icons/golang";
import Swift from "./component-icons/swift";
import PS from "./component-icons/ps";
import Android from "./component-icons/android";
import Web from "./component-icons/web";
import Mobile from "./component-icons/mobile";
import Cart from "./cart";
import RecipeReviewCard from "./cardforlistcourse";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SearchForListCourse() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="tittle-and-content">
          <h2>The world's largest selection of courses</h2>
          <h3>
            Choose from 150,000 online video courses with new additions
            published every month
          </h3>
        </div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="WebApp" icon={<Web />} {...a11yProps(0)} />
              <Tab label="MobileApp" icon={<Mobile />} {...a11yProps(1)} />
              <Tab label="NodeJS" icon={<Nodejs />} {...a11yProps(2)} />
              <Tab label="GoLang" icon={<Golang />} {...a11yProps(3)} />
              <Tab label="FullStack" icon={<FullStack />} {...a11yProps(4)} />
              <Tab label="Ps" icon={<PS />} {...a11yProps(5)} />
              <Tab label="Swift" icon={<Swift />} {...a11yProps(6)} />
              <Tab label="Android" icon={<Android />} {...a11yProps(7)} />
              <Tab label="Javascript" icon={<JsIcon />} {...a11yProps(8)} />
              <Tab label="Reactjs" icon={<Reactjs />} {...a11yProps(9)} />
              <Tab label="Angular" icon={<Angular />} {...a11yProps(10)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <RecipeReviewCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item eight
          </TabPanel>
          <TabPanel value={value} index={8}>
            Item nine
          </TabPanel>
          <TabPanel value={value} index={9}>
            Item ten
          </TabPanel>
          <TabPanel value={value} index={10}>
            Item elevent
          </TabPanel>
        </div>
      </Container>
      <Cart />
    </React.Fragment>
  );
}
