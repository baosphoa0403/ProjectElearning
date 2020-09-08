import React from "react";
import { DivItem2 } from "./styled-inforusers";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const ConfirmCourseDiv = styled.div`
  .desktop {
    display: flex;
    justify-content: space-around;
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 450px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;
const ActionDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15em;
`;

export default function ConfirmCourses() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <DivItem2>
      <ConfirmCourseDiv>
        <div className="desktop">
          <span>Name</span>
          <ActionDiv>
            <Button variant="contained" color="primary">
              Confirm
            </Button>
            <Button variant="contained" color="secondary">
              Deregister
            </Button>
          </ActionDiv>
        </div>
        <div className="mobile">
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Confirm" />
                {/* <Button variant="contained" color="primary">
                  Confirm
                </Button>
                <Button variant="contained" color="secondary">
                  Deregister
                </Button> */}
              </ListItem>
            </List>
          </Collapse>
        </div>
      </ConfirmCourseDiv>
    </DivItem2>
  );
}
