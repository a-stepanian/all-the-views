import React from "react";
import styled from "styled-components";
import LogoColumnBigScreen from "./LogoColumnBigScreen";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const HomeSecond = () => {
  const { setPageSelected } = useGlobalContext();
  return (
    <Wrapper>
      <aside>
        <div className="text-box">
          <h2>
            Take a look at our{" "}
            <Link
              to="/places"
              className="places"
              onClick={() => setPageSelected("places")}
            >
              places
            </Link>
          </h2>
          <div className="accent-line"></div>
          <p> Find all the views and none of the crowding.</p>
        </div>
      </aside>
      <div className="img"></div>
      <LogoColumnBigScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin-top: 50px;
  background-color: var(--black);
  display: grid;
  grid-template-columns: 1fr;
  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    .text-box {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 3.3rem;
        line-height: 3.6rem;
        color: var(--white);
        text-align: center;
        .places {
          font-size: 3.5rem;
          font-weight: 500;
          color: var(--off-white);
          letter-spacing: 0.05rem;
        }
      }
      .accent-line {
        width: 100px;
        margin: 40px 0 20px;
        border-top: 8px solid var(--green);
      }
      p {
        text-align: center;
        font-size: 1rem;
        line-height: 1.4rem;
        color: var(--white);
        letter-spacing: 0.1rem;
      }
    }
  }
  .img {
    position: relative;
    width: 100%;
    min-height: 400px;
    background-image: url("/img-burroughs.jpg");
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 480px) {
    .text-box {
      width: 480px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 500px 1fr 60px;
    align-items: normal;
    aside {
      padding-left: 20px;
      align-items: left;
      .text-box {
        align-items: flex-start;
        h2 {
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
  }
`;

export default HomeSecond;
