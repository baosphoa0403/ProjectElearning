import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Title } from "../IntroduceStep /style-component-IntroduceStep";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { textAlign } from "@material-ui/system";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      height: 300,
      textAlign: "center",
      padding: "4em 2em",
      background: "#edeeef",
      border: "1px solid transparent",
      '&hover': {
        boxShadow: "0 0 18.69px 2.31px rgba(204,204,223,.5)"
      }
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    h5: {
      fontSize: "1.3em",
      lineHeight: "1.4em"
    },
    p: {
      color: "#bdbdbd"
    }
  })
);
export default function IntroduceStep() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed>
        <Title>WHAT DO WE HAVE?</Title>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <i
                    className="fa fa-graduation-cap"
                    style={{ fontSize: "40px", color: "#009e7f" }}
                  ></i>
                </Typography>
                <Typography variant="h5" component="h5" className={classes.h5}>
                  PROGRAM-ORIENTED LEARNING
                </Typography>
                <Typography variant="body2" component="p">
                  Develop your ability and passion for programming inspiration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <i
                    className="fa fa-book"
                    style={{ fontSize: "40px", color: "#009e7f" }}
                  ></i>
                </Typography>
                <Typography variant="h5" component="h5" className={classes.h5}>
                  FOUNDATION, THINKING, CORE IN PROGRAMMING
                </Typography>
                <Typography variant="body2" component="p">
                  You will be confident in the change of technology and work
                  environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <i
                    className="fa fa-globe"
                    style={{ fontSize: "40px", color: "#009e7f" }}
                  ></i>
                </Typography>
                <Typography variant="h5" component="h5" className={classes.h5}>
                  NEW TECHNOLOGY, SPECIALIZED, REALISTIC
                </Typography>
                <Typography variant="body2" component="p">
                  You can learn and experience the latest in programming
                  technologies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
