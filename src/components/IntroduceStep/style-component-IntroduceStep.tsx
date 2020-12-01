import styled from "styled-components";
interface Props {
  darkMode: boolean
}
export const Title = styled.h1<Props>`
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 40px;
  color: ${p  => p.darkMode ? 'white' : 'black'};
  text-transform: uppercase;
  position: relative;
  margin-top: 0;
  text-align: center;
`;

export const Div = styled.div``;
