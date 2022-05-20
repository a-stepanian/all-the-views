import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import LogoColumnBigScreen from "./LogoColumnBigScreen";

const HomeThird = () => {
  const { setCurrentPage } = useGlobalContext();
  return (
    <Wrapper>
      <LogoColumnBigScreen />
      <div className="img"></div>
      <aside className="find-your-view-container">
        <div className="text-box">
          <h2>
            Find your picture perfect{" "}
            <Link
              to="/places"
              className="places"
              onClick={() => setCurrentPage("places")}
            >
              view
            </Link>
          </h2>
          <div className="accent-line"></div>
          <p>
            Discover the hidden gems and the lesser known wonders of the Pacific
            Northwest.
          </p>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 25px 0 25px;
  background-color: var(--black);
  display: flex;
  flex-direction: column-reverse;
  .find-your-view-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .text-box {
      padding: 20px;
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 2.3rem;
        line-height: 2.6rem;
        color: var(--white);
        text-align: center;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9);
        .places {
          font-size: 3.5rem;
          font-weight: 500;
          color: var(--light-green);
          letter-spacing: 0.05rem;
          transition: letter-spacing 0.2s, color 0.7s;
        }

        .places:hover {
          letter-spacing: 0.15rem;
          color: var(--bright-green);
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
    background-image: url("https://res.cloudinary.com/dtx3servt/image/upload/v1653004578/AllTheViews/img-metalake_sqpeab.jpg");
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
    grid-template-columns: 60px 1fr 500px;
    align-items: normal;
    .find-your-view-container {
      margin-top: 0;
      padding-left: 20px;
      align-items: left;
      display: flex;
      .text-box {
        align-items: flex-start;
        h2 {
          font-size: 3.3rem;
          line-height: 3.6rem;
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
  }
`;

export default HomeThird;
