import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";

// export const Wrap = styled.div`
//     position: relative;
//     width: 100vw;
//     height: fit-content;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     flex-direction: column;
//     /* border: 1px solid red; */
// `;

// export const AllWrap = styled(Wrap)`
//     /* border: 1px solid blue; */
//     height: 400px;
// `;

// export const MainImage = styled(motion.div) < { bgPhoto: string }> `
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     background-image: linear-gradient(
//         rgba(19, 16, 16, 0.3),
//       rgba(19, 16, 16, 0.3),
//       #181818
//     ) ,url(${(props) => props.bgPhoto});
//     background-size: cover;
//     width: 100%;
//     height: 100%;
//     resize: both;
//     /* animation: identifier 3s linear infinite;
//     @keyframes identifier { 
//         0%,
// 		100% {
// 			background-image: url(${(props) => props.bgPhoto[0]});
// 		}
// 		50% {
// 			background-image: url(${(props) => props.bgPhoto[4]});
// 		}
// 		75% {
// 			background-image: url(${(props) => props.bgPhoto[2]});
// 		}
//     } */
// `;

// export const BannerImage = styled.div< { bgPhoto: string }>`
//     z-index: 1;
//     width: 650px;
//     height: 80%;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     flex-wrap: wrap;
//     margin-top: 50px;
//     background-image: url(${(props) => props.bgPhoto});
//     background-size: cover;
// `;

// export const BannerWrap = styled.div`
//     background-color: rgba(0, 0, 0, 0.5);
//     margin-left: 20px;
//     border: 1px solid red;
//     width: fit-content;
//     margin-bottom: 10px;
// `;


// export const Title = styled.h1`
//     color: ${(props) => props.theme.white};
//     font-weight: 700;
//     font-size: 28px;
//     margin-bottom: 10px;
// `;

// export const Overview = styled.p`
//     color: ${(props) => props.theme.white};
//     font-weight: 300;
//     font-size: 16px;
//     width: 300px;
// `;



export const StyledSlider = styled(Slider)`
  border: 3px solid blue;
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
    display: block;
    width: 30px;
    height: 30px;
    top: 0;
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

