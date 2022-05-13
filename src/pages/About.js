import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const About = () => {
  return (
    <Wrapper>
      <div className="black-box"></div>
      <div className="green-box">
        <h2>Tired of battling the crowds at Paradise?</h2>
        <p>
          All The Views is a user-driven collection of the best places the
          Pacific Northwest has to offer.
        </p>
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
  flex-direction: row;
  .black-box {
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    animation: 0.5s hero-shrink 1s forwards;
  }
  @keyframes hero-shrink {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  .green-box {
    width: 60px;
    height: 100vh;
    background-image: url('/img-burroughs.jpg');
    background-size: cover;
    background-position: center;
    display: block;
    h2 {
      position: absolute;
      top: 25%;
      left: 30%;
      width: 60%;
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 2.2rem;
      color: var(--white);
      text-shadow: 0 0 5px black;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 60px;
      width: calc(100% - 60px);
      padding: 50px 20px;
      background-color: rgba(0,0,0,0.5);
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 1.5rem;
      text-shadow: 0 0 5px black;
      color: var(--white);
    }
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
        height: 20%;
        width: 10px;
        background-color: var(--green);
        opacity: 0.5;
        animation: 1.5s line-color-change 0.5s forwards;
      }
      @keyframes line-color-change {
        0% {
          background-color: var(--green);
          height: 20%;
        }
        33% {
          background-color: var(--off-white);
          height: 0;
        }
        100% {
          background-color: var(--off-white);
          height: 0;
        }
      }
      animation: 1.5s color-change 0.5s forwards;
    }
    @keyframes color-change {
      0% {
        background-color: var(--black);
        color: var(--green);
      }
      50% {
        background-color: var(--green);
        color: var(--off-white);
      }
      100% {
        background-color: var(--green);
        color: var(--black);
      }
    }
    animation: 0.5s icon-grow 1s forwards;
  }
  @keyframes icon-grow {
    0% {
      width: 60px;
    }
    100% {
      width: 100%;
    }
  }



  @media (min-width: 900px) {
      .black-box {
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
      .green-box {
        h2 {
          top: 40%;
          left: 20%;
          width: 60%;
          font-size: 3rem;
          line-height: 2.2rem;
          text-shadow: 0 0 5px black;
        }
        p {
          top: calc(40% + 50px);
          left: 35%;
          width: 30%;
          background-color: rgba(0,0,0,0.5);
          font-weight: 900;
          font-size: 1.5rem;
          line-height: 1.5rem;
          text-shadow: 0 0 5px black;
        }
        .icon-wrapper {
          .vertical-line {
            height: 80%;
            animation: 1.5s line-color-change forwards;
          }
          @keyframes line-color-change {
            0% {
              background-color: var(--green);
              height: 80%;
            }
            33% {
              background-color: var(--off-white);
              height: 0;
            }
            100% {
              background-color: var(--off-white);
              height: 0;
            }
          }
          animation: 1.5s color-change forwards;
        }
        @keyframes color-change {
          0% {
            background-color: var(--black);
            color: var(--green);
          }
          50% {
            background-color: var(--green);
            color: var(--off-white);
          }
          100% {
            background-color: var(--green);
            color: var(--black);
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
  }
`;

export default About;
