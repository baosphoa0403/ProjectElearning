import styled from "styled-components";
export const Title = styled.h1`
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 40px;
  color: #000;
  text-transform: uppercase;
  position: relative;
  margin-top: 0;
  text-align: center;
  @media only screen and (max-width: 375px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Div = styled.div`
@media only screen and (min-width: 500px) and (max-width: 768px) {
  margin: 0px 165px;
}
`