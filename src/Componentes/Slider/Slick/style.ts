import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 0;
    z-index: 1;
    &:before {
      display: none;
    }
  }
  .slick-next {
    right: 0;
    z-index: 1;
    &:before {
      display: none;
    }
  }
  .slick-arrow-icon-left,
  .slick-arrow-icon-right {
    position: absolute;
    display: block;
    width: 2.3rem;
    z-index: 10;
    height: 2.3rem;
    top: -30px;
    bottom: 0;
    cursor: pointer;
    background: transparent;
    color: #fafafa;
    padding: 0;
    outline: none;
    transition: opacity 0.3s;
    @media screen and (max-width: 1500px) and (min-width: 1000px) {
      position: absolute;
      top: -28px;
    };
    @media screen and (max-width: 1000px) and (min-width: 700px) {
        position: absolute;
        top: -20px;
        height: 3rem;
      width: 3rem;
    };
    @media screen and (max-width: 700px) and (min-width: 500px) {
        top: -20px;
      height: 3.3rem;
      width: 3.3rem;
    };
    &:focus{
      border: none;
    }
  }
  .slick-arrow-icon-right{
    position: absolute;
    right: 0;
  }
`;