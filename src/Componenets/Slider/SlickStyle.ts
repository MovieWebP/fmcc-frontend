import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  .slick-slider {
    height: 100vh;
  }
  .slick-list {
    height: calc(100vh - 60px);
  }
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
  .slick-dots {
    bottom: 35px;
  }
  .slick-arrow-icon-left,
  .slick-arrow-icon-right {
    position: absolute;
    border: 1px solid red;
    display: block;
    width: 30px;
    height: 30px;
    top: 0;
    bottom: 0;
    cursor: pointer;
    background: transparent;
    color: #fff;
    padding: 0;
    border: none;
    outline: none;
    transition: .3s ease-in-out;
    &:hover,
    &:focus {
      outline: none;
      background: transparent;
      opacity: 0.5;
      font-size: 40px;
      &::before {
        opacity: 1;
      }
    }
  }
  .slick-arrow-icon-left {
    left: 30px;
    [dir="rtl"] & {
      left: auto;
      right: 30px;
    }
  }
  .slick-arrow-icon-right {
    right: 30px;
    [dir="rtl"] & {
      left: 30px;
      right: auto;
    }
  }
  .slick-dots li button {
    &:before {
      color: #fff;
    }
  }
`;
