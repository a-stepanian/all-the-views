import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <h2>Tired of the crowds?</h2>
      <p>
        All The Views is a user-driven collection of the best outdoor
        sightseeing the Pacific Northwest has to offer. Take a look at our{" "}
        <Link to="/places">places</Link> to find all the views and none of the
        crowding.
      </p>
      <div className="shrinking-container"></div>
      <div className="growing-container">
        <div className="icon-wrapper">
          <h3 className="atv">ATV</h3>
          <GiMountains className="icon" />
          <GiPhotoCamera className="icon" />
          <GiPineTree className="icon" />
          <div className="vertical-line"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  h2 {
    position: absolute;
    top: 40%;
    left: 10%;
    width: 80%;
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: var(--white);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    opacity: 0;
    animation: 1s appear 2s forwards;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 50px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--white);
    opacity: 0;
    animation: 1s appear 2s forwards;
  }
  .shrinking-container {
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    animation: 0.8s container-shrink 1s forwards;
  }
  .growing-container {
    width: 60px;
    height: 100vh;
    background-image: url("/img-burroughs.jpg");
    background-size: cover;
    background-position: center;
    .icon-wrapper {
      width: 60px;
      height: 100vh;
      background-color: var(--black);
      color: var(--light-green);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      .icon {
        margin: 7px;
        font-size: 1.8rem;
      }
      .atv {
        margin: 7px;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: -0.1rem;
      }
      .vertical-line {
        height: 20%;
        width: 10px;
        background-color: var(--light-green);
        opacity: 0.5;
        animation: 2s line-color-change forwards;
      }
      animation: 2s icon-bar-color-change forwards;
    }
    animation: 0.8s growing-container-grow 1s forwards;
  }

  /* ----------------------- */
  /* Media Queries           */
  /* ----------------------- */

  @media (min-width: 900px) {
    h2 {
      top: 40%;
      left: 20%;
      font-size: 4rem;
      line-height: 2.2rem;
    }

    p {
      bottom: auto;
      top: calc(40% + 60px);
      left: 20%;
      width: 60%;
      padding: 50px;
      background-color: rgba(255,255,255,0.8);
      border-radius: 3px;
      color: var(--black)
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }

  /* ----------------------- */
  /* Animations           */
  /* ----------------------- */

  @keyframes container-shrink {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }

  @keyframes growing-container-grow {
    0% {
      width: 60px;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes line-color-change {
    0% {
      background-color: var(--light-green);
      height: 20%;
    }
    60% {
      background-color: var(--white);
      height: 20%;
    }
    100% {
      background-color: transparent;
      height: 20%;
    }
  }

  @keyframes icon-bar-color-change {
    0% {
      background-color: var(--black);
      color: var(--green);
    }
    60% {
      background-color: var(--green);
      color: var(--off-white);
    }
    100% {
      background-color: transparent;
      color: transparent;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default About;
