import React from "react";
import styled from "styled-components";

const HomeFirst = () => {
  return (
    <Wrapper>
      <h2>Tired of the crowds?</h2>
      <div className="bigArrowBox">
        <div className="arrowLeft"></div>
        <div className="arrowRight"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dtx3servt/image/upload/v1653004571/AllTheViews/img-dunes_nvu8xg.jpg");
  background-size: cover;
  background-position: center;
  h2 {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 250px;
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 2rem;
    color: var(--off-white);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9);

    opacity: 0;
    animation: 0.8s appear forwards;
  }

  .bigArrowBox {
    height: 112px;
    width: 112px;
    position: absolute;
    border-radius: 50%;
    bottom: 10%;
    left: calc(50% - 51px);
    animation: arrowBoxBounce 1s ease-in-out 1.4s infinite;
  }

  .arrowLeft {
    position: absolute;
    top: 30px;
    left: 7px;
    border-bottom: 12px solid var(--off-white);
    transform: rotate(45deg);
    transform-origin: bottom left;
    animation: growRight 0.2s forwards 1s;
  }

  .arrowRight {
    position: absolute;
    top: calc(48px + 30px);
    left: calc(49px + 7px);
    border-bottom: 12px solid var(--off-white);
    transform: rotate(-45deg);
    transform-origin: bottom left;
    animation: growLeft 0.2s forwards 1.2s;
  }

  /* ----------------------- */
  /* Animation               */
  /* ----------------------- */

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes arrowBoxBounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes growRight {
    0% {
      width: 0;
    }
    100% {
      width: 68px;
    }
  }

  @keyframes growLeft {
    0% {
      width: 0;
    }
    100% {
      width: 68px;
    }
  }

  /* ----------------------- */
  /* Media Queries           */
  /* ----------------------- */

  @media (min-width: 768px) {
    h2 {
      width: 400px;
      font-size: 3.2rem;
      line-height: 2.4rem;
      left: 15%;
    }
  }

  @media (min-width: 900px) {
    h2 {
      width: 500px;
      font-size: 4rem;
      line-height: 2.8rem;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      width: 500px;
      font-size: 4.5rem;
      line-height: 3rem;
    }
  }
`;

export default HomeFirst;
