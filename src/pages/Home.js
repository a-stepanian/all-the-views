import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const Home = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Find your picture perfect view</h2>
        <div className="accent-line"></div>
        <p>
          All The Views is a user-driven collection of the best-kept-secrets of
          the Pacific Northwest.
        </p>
      </div>
      <div className="img"></div>
      <div className="icon-wrapper">
        <h3 className="atv">ATV</h3>
        <GiMountains className="icon" />
        <GiPhotoCamera className="icon" />
        <GiPineTree className="icon" />
        <div className="vertical-line"></div>
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
    margin-left: 20px;
    width: 450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
  }
  .img {
    width: 100%;
    min-height: 400px;
    background-image: url("/IMG-1746.jpg");
    background-size: cover;
    background-position: center;
  }
  .icon-wrapper {
    display: none;
  }
  h2 {
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
    display: grid;
    grid-template-columns: 560px 1fr 4%;
    .hero {
      margin-top: none;
    }
    .icon-wrapper {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: var(--green);
      .icon {
        font-size: 1.8rem;
      }
      .atv {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: -0.1rem;
      }
      .vertical-line {
        height: 60%;
        width: 10px;
        background-color: var(--green);
        opacity: 0.3;
      }
    }
  }
`;

export default Home;
