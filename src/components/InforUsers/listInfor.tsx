import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import UserProfile from "./YourProfile/UserProfile"
import { connect } from "react-redux"
import * as action from "./Modules/Actions/Action"
import {
  H3Item1,
  SpanItem1,
  DivItem2,
  DivCheckoutItem2,
  H3Item2,
  YourItem2,
  TitleItem2,
  PriceItem2,
  FormItem2,
  LabelItem2,
  InputItem2,
  Div,
} from "./styled-inforusers";
import ConfirmCourses from "./confirmCourses";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ paddingTop: "0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
    marginTop: "200px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#fff",
    boxShadow: "0 6px 9px rgba(50,50,93,.06), 0 2px 5px rgba(0,0,0,.08)",
    width: 300,
    height: "auto",
    padding: "50px 0",
    listStyle: "none",
    indicatorColor: "green",
    textColor: "green",
  },
  item1: {
    // padding: '30px 0',
    backgroundColor: "#fff",
    boxShadow: "0 6px 9px rgba(50,50,93,.06), 0 2px 5px rgba(0,0,0,.08)",
    // overflow: 'scroll',
    width: 400,
  },
  item11: {
    // padding: '30px 0',
    backgroundColor: "#fff",
    boxShadow: "0 6px 9px rgba(50,50,93,.06), 0 2px 5px rgba(0,0,0,.08)",
    // overflow: 'scroll',
    width: 400,
    transition: "all .3s ease-in",
  },
  button2: {
    marginTop: "50px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#f1f1f1!important",
    borderColor: "#f1f1f1!important",
    padding: "15px",
    fontWeight: 600,
    color: "#909090",
    width: "100%",
  },
  hello: {
    [theme.breakpoints.between("sm", "md")]: {
      display: "none",
    },
  },
}));

function VerticalTabs(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    props.getProfiles();
  }, []);

  return (
    <React.Fragment>
      <Container fixed>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.hello} lg={3}>
              <Div>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  className={classes.tabs}
                  indicatorColor="primary"
                >
                  <Tab label="Checkout" {...a11yProps(0)} />
                  <Tab label="Your Account Settings" {...a11yProps(1)} />
                  <Tab label="Confirm Courses" {...a11yProps(2)} />
                  <Tab label="Logout" {...a11yProps(3)} />
                </Tabs>
              </Div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <TabPanel value={value} index={0}>
                <DivItem2>
                  <DivCheckoutItem2>
                    <H3Item2>Your order</H3Item2>
                    <YourItem2>
                      <TitleItem2>Sub Total(items)</TitleItem2>
                      <PriceItem2>$0.00</PriceItem2>
                    </YourItem2>
                    <YourItem2>
                      <TitleItem2>Shipping Fee</TitleItem2>
                      <PriceItem2>$00</PriceItem2>
                    </YourItem2>
                    <YourItem2>
                      <TitleItem2>Total</TitleItem2>
                      <PriceItem2>$0.00</PriceItem2>
                    </YourItem2>
                  </DivCheckoutItem2>
                  <form style={{ marginTop: "50px" }}>
                    <DivCheckoutItem2>
                      <H3Item2>Billing Address</H3Item2>
                      <FormItem2>
                        <LabelItem2>Name</LabelItem2>
                        <InputItem2
                          name="name"
                          id="name"
                          type="text"
                          value="haha"
                        ></InputItem2>
                      </FormItem2>
                      <FormItem2>
                        <LabelItem2>Email</LabelItem2>
                        <InputItem2
                          name="email"
                          id="email"
                          type="email"
                          value="haha@gmail.com"
                        ></InputItem2>
                      </FormItem2>
                      <FormItem2>
                        <LabelItem2>Address</LabelItem2>
                        <InputItem2
                          name="address"
                          id="address"
                          type="text"
                          value="haha"
                        ></InputItem2>
                      </FormItem2>
                      <FormItem2>
                        <LabelItem2>City</LabelItem2>
                        <FormControl variant="outlined">
                          <InputLabel htmlFor="outlined-age-native-simple">
                            City
                          </InputLabel>
                          <Select
                            native
                            label="City"
                            inputProps={{
                              name: "city",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option aria-label="None" value="" />
                            <option value={10}>Thành phố Hồ Chí Minh</option>
                            <option value={20}>Hà Nội</option>
                            <option value={30}>Thành phố Đà Nẵng</option>
                          </Select>
                        </FormControl>
                      </FormItem2>
                      <FormItem2>
                        <LabelItem2>District</LabelItem2>
                        <FormControl variant="outlined">
                          <InputLabel htmlFor="outlined-age-native-simple">
                            District
                          </InputLabel>
                          <Select
                            native
                            label="District"
                            inputProps={{
                              name: "District",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option aria-label="None" value="" />
                            <option value={10}>Phú Nhuận</option>
                            <option value={20}>Quận Gò Vấp</option>
                            <option value={30}>Quần 12</option>
                          </Select>
                        </FormControl>
                      </FormItem2>
                      <FormItem2>
                        <LabelItem2>Phone</LabelItem2>
                        <InputItem2
                          name="phone"
                          id="phone"
                          type="phone"
                          value="0123456789"
                        ></InputItem2>
                      </FormItem2>
                    </DivCheckoutItem2>
                  </form>
                  <DivCheckoutItem2 style={{ margin: "60px 0 30px" }}>
                    <H3Item2>Select Payment Option</H3Item2>
                  </DivCheckoutItem2>
                  <button className={classes.button2}>
                    Proceed to Checkout
                  </button>
                </DivItem2>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UserProfile />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ConfirmCourses />
              </TabPanel>
              <TabPanel value={value} index={3}>
                Logout
              </TabPanel>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getProfiles: (data: any) => {
      dispatch(action.actGetProfileAPI(data));
    }
  }
}
export default connect(null, mapDispatchToProps)(VerticalTabs);


