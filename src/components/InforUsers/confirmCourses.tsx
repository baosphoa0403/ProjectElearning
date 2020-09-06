import React from "react";
import { DivItem2 } from "./styled-inforusers";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const ConfirmCourseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1em;
`;
const ActionDiv = styled.div`
  display: flex;
  width: 15em;
  justify-content: space-around;
`;

export default function ConfirmCourses() {
  return (
    <DivItem2>
      <ConfirmCourseDiv>
        <span>Name</span>
        <ActionDiv>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
          <Button variant="contained" color="secondary">
            Deregister
          </Button>
        </ActionDiv>
      </ConfirmCourseDiv>
    </DivItem2>
  );
}
