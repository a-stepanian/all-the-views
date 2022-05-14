import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const About = () => {
  const { setPageSelected } = useGlobalContext();
  return (
    <Wrapper>
      <h2>Tired of the crowds?</h2>
      <div>
        <p>
          All The Views is a collection of the best outdoor sightseeing in the
          Pacific Northwest.{" "}
        </p>
        <p>
          Take a look at our{" "}
          <Link
            to="/places"
            className="places"
            onClick={() => setPageSelected("places")}
          >
            places
          </Link>{" "}
          to find all the views and none of the crowding.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  background-image: url("/img-dunes.jpg");
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
    color: var(--white);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    opacity: 0;
    animation: 0.8s appear forwards;
  }
  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35%;
    background-color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2rem;
    color: var(--black);
    opacity: 0;
    animation: 0.8s appear forwards;
    p:first-of-type {
      margin-bottom: 20px;
    }
    .places {
      font-weight: 500;
      color: var(--light-green);
    }
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
`;

export default About;
