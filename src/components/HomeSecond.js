import React from "react";
import styled from "styled-components";
import LogoColumnBigScreen from "./LogoColumnBigScreen";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const HomeSecond = () => {
  const { setCurrentPage } = useGlobalContext();
  return (
    <Wrapper>
      <aside className="take-a-look-container">
        <div className="text-box">
          <h2>
            Take a look at our{" "}
            <Link
              to="/places"
              className="places"
              onClick={() => setCurrentPage("places")}
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

const Wrapper = styled.section`
  margin-top: 100px;
  background-color: var(--black);
  display: grid;
  grid-template-columns: 1fr;

  .take-a-look-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .text-box {
      margin: 50px 0;
      padding: 20px;
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

        .arrow {
          transform: translate(10px, 8px);
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
    background-image: url("https://res.cloudinary.com/dtx3servt/image/upload/v1653004569/AllTheViews/img-burroughs_vu9g3w.jpg");
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
    .take-a-look-container {
      align-items: left;

      .text-box {
        align-items: flex-start;
        padding-left: 60px;

        h2 {
          text-align: left;
        }

        p {
          text-align: left;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export default HomeSecond;
