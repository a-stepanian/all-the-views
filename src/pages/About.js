import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const About = () => {
  return (
    <Wrapper>
      <div className="hero"></div>
      <div className="about">
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
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  height: 100vh;
  .hero {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  section {
    height: 100vh;
    width: 100%;
    background-color: var(--white);
  }
  .about {
    display: none;
  }
  h2 {
    text-align: center;
    font-size: 3.3rem;
    line-height: 3.6rem;
    color: var(--white);
  }
  .accent-line {
    margin-top: 40px;
    width: 100px;
    border-top: 8px solid var(--green);
  }
  p {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.4rem;
    color: var(--white);
    letter-spacing: 0.1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    transition: 1s;
    .hero {
      margin-top: none;
      padding: 0;
      width: 100%;
      animation: 1s hero-shrink 0.5s forwards;
    }
    @keyframes hero-shrink {
      0% {
        width: 100%;
      }
      100% {
        width: 0;
      }
    }
    .about {
      display: block;
      width: 60px;
      height: 100vh;
      background-color: var(--green);
      .icon-wrapper {
        width: 60px;
        height: 100vh;
        background-color: var(--black);
        color: var(--green);
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
          height: 80%;
          width: 10px;
          background-color: var(--off-white);
          opacity: 0.5;
          animation: 1.5s line-color-change forwards;
        }
        @keyframes line-color-change {
          0% {
            background-color: var(--green);
            height: 80%;
          }
          33% {
            background-color: var(--off-white);
            height: 80%;
          }
          100% {
            background-color: var(--off-white);
            height: 0;
          }
        }
        animation: 0.5s color-change forwards;
      }
      @keyframes color-change {
        0% {
          background-color: var(--black);
          color: var(--green);
        }
        100% {
          background-color: var(--green);
          color: var(--off-white);
        }
      }
      animation: 1s icon-grow 0.5s forwards;
    }
    @keyframes icon-grow {
      0% {
        width: 60px;
      }
      100% {
        width: 100%;
      }
    }
  }
`;

export default About;
