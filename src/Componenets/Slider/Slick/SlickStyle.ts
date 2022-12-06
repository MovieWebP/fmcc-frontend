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
    border: 1px solid red;
    display: block;
    width: 30px;
    z-index: 10;
    height: 30px;
    top: 0;
    bottom: 0;
    cursor: pointer;
    background: transparent;
    color: #fafafa;
    padding: 0;
    border: none;
    outline: none;
    transition: .3s ease-in-out;
    &:hover {
      outline: none;
      background: transparent;
      opacity: 0.7;
      font-size: 40px;
    }
    &:before {
      display: none;
    }
  }
`;
