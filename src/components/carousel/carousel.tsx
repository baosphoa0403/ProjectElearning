import React from "react";
import {
  DivSlider,
  DivContentImages,
  DivContainer,
  DivContentSliderImage,
  DivContentIntroduce,
} from "./styled-component-carousel";

function Carousel() {
  return (
      <DivSlider>
      <DivContentImages>
        <DivContainer>
          <DivContentSliderImage></DivContentSliderImage>
        </DivContainer>
        <DivContentIntroduce>
          The place to train professional programmers, Come With Us A Place To
          Help You Become A Professional Programmer, Bring patience and
          diligence to succeed
        </DivContentIntroduce>
      </DivContentImages>
    </DivSlider>
  );
}

export default Carousel;
