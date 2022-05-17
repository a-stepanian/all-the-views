import React from "react";
import styled from "styled-components";
import { GiStoneWall } from "react-icons/gi";

const Error = () => {
  return (
    <Wrapper>
      <div className="text-box">
        <h2>Error</h2>
        <div className="accent-line"></div>
        <p>404 Page Not Found</p>
      </div>
      <GiStoneWall className="wall" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  .text-box {
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 3.3rem;
      color: var(--white);
      text-shadow: 0 0 1px var(--bright-green);
      animation: 0.5s flicker infinite;
    }
    .accent-line {
      width: 100px;
      margin: 32px 0 40px;
      border-top: 8px solid var(--green);
    }
    p {
      font-size: 1rem;
      color: var(--white);
      letter-spacing: 0.1rem;
    }
  }
  .wall {
    position: absolute;
    font-size: 18rem;
    color: rgba(100, 10, 10, 0.8);
    filter: blur(2px);
  }

  @keyframes flicker {
    0% {
      text-shadow: 0 0 1px var(--bright-green);
    }
    10% {
      text-shadow: 0 0 4px var(--bright-green);
    }
    20% {
      text-shadow: 0 0 2px var(--bright-green);
    }
    30% {
      text-shadow: 0 0 1px var(--bright-green);
    }
    55% {
      text-shadow: 0 0 4px var(--bright-green);
    }
    65% {
      text-shadow: 0 0 6px var(--bright-green);
    }
    75% {
      text-shadow: 0 0 4px var(--bright-green);
    }
    100% {
      text-shadow: 0 0 1px var(--bright-green);
    }
  }
`;

export default Error;
