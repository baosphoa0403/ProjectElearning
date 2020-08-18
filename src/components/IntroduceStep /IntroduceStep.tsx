import React from "react";
import Container from "@material-ui/core/Container";
import {
  Title
} from "../IntroduceStep /style-component-IntroduceStep";
import Grid from "@material-ui/core/Grid";
import { textAlign, fontSize } from "@material-ui/system";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minWidth: 275,
    maxWidth: 320,
    height: 400,
    textAlign: "center",
    backgroundColor: "#edeeef",
    padding: "4em 2em",
    "&:hover": {
        backgroundColor: "#009e7f",
        boxShadow: "0 0 18.69px 2.31px rgba(204,204,223,.5)"
    },
  },
  icon: {
     textAlign: "center",
     fontSize: 40
  },
  h5: {
    fontSize: "1.3em",
    lineHeight: "1.4em"

  },
  card: {
   
  },
  p: {
    marginBottom: 12
  }
});

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
}

export default function IntroduceStep() {
  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        <Title>WHAT DO WE HAVE?</Title>

        <Typography component="div">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="space-around"
            alignItems="center"
          >

            <Grid >
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.icon}
                    color="textSecondary"
                    gutterBottom
                  >
                    <i class="fa fa-graduation-cap"></i>
                  </Typography>
                  <Typography className={classes.h5} component="h5">
                    Learning according to the route, with orientation
                  </Typography>
                  <Typography className={classes.p} component="p" color="textSecondary">
                   Develop your ability and passion for programming inspiration.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid >
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.icon}
                    color="textSecondary"
                    gutterBottom
                  >
                  <i class="fa fa-book"></i>
                  </Typography>
                  <Typography className={classes.h5} component="h5">
                    Foundation, thinking, core in programming
                  </Typography>
                  <Typography className={classes.p} component="p" color="textSecondary">
                    You will be confident in the change of technology and work environment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid >
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.icon}
                    color="textSecondary"
                    gutterBottom
                  >
                    <i class="fa fa-globe"></i>
                  </Typography>
                  <Typography className={classes.h5} component="h5">
                    New, intensive, practical technology
                  </Typography>
                  <Typography className={classes.p} component="p" color="textSecondary">
                    You learn and experience the latest in programming technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}
