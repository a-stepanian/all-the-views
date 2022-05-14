import React from "react";
import styled from "styled-components";
import LogoColumnBigScreen from "../components/LogoColumnBigScreen";

import HomePageBigTiles from "../components/HomePageBigTiles";

const Home = () => {
  return (
    <Wrapper>
      <aside>
        <div className="text-box">
          <h2>Find your picture perfect view</h2>
          <div className="accent-line"></div>
          <p>
            Discover the hidden gems and the lesser known wonders of the Pacific
            Northwest.
          </p>
        </div>
      </aside>
      <div className="img">{/* <HomePageBigTiles /> */}</div>
      <LogoColumnBigScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  aside {
    margin-top: 100px;
    background-color: var(--black);
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
      }
      .accent-line {
        width: 100px;
        margin-top: 40px;
        border-top: 8px solid var(--green);
      }
      p {
        margin-top: 20px;
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
    background-image: url("/img-pinnaclepeak.jpg");
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
      height: 100vh;
      margin-top: 0;
      padding-left: 20px;
      align-items: left;
      display: flex;
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

export default Home;
