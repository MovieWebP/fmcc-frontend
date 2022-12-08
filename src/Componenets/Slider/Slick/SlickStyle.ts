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
    transition: .3s ease-in-out;
    &:hover {
      outline: none;
      background: transparent;
      opacity: 0.7;
    }
  }
  .slick-arrow-icon-right{
    position: absolute;
    right: 0;
  }
`;
