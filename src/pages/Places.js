import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoColumnBigScreen from "../components/LogoColumnBigScreen";
import data from "../data";

const Places = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <aside>
        <div className="text-box">
          <h2>Choose a location</h2>
          <div className="accent-line"></div>
          <p>Click on an image to learn more.</p>
        </div>
      </aside>
      <section>
        {data.map((place) => {
          const { id, title, location, img, description } = place;
          return (
            <Link to={`/places/${id}`} className="card" key={id}>
              <img src={img} alt={title} />
              <footer>
                <p>{title}</p>
              </footer>
            </Link>
          );
        })}
      </section>
      <LogoColumnBigScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
  section {
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
    .card {
      margin-bottom: 20px;
      padding: 5px;
      border-radius: 5px;
      background-color: var(--white);
      img {
        max-width: 100%;
      }
      footer {
        height: 50px;
        background-color: var(--off-white);
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-weight: 500;
          color: var(--black);
        }
      }
    }
  }

  @media (min-width: 320px) {
    .text-box {
      width: 320px;
    }
  }

  @media (min-width: 900px) {
    background-color: var(--dark-green);
    display: grid;
    grid-template-columns: 560px 1fr 60px;
    align-items: start;
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
    section {
      height: auto;
    }
  }

  @media (min-width: 1200px) {
    section {
      padding: 100px;
    }
  }
`;

export default Places;
