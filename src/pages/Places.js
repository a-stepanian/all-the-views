import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoColumnBigScreen from "../components/LogoColumnBigScreen";
import data from "../data";
import { useGlobalContext } from "../context";

const Places = () => {
  const { setCurrentPage } = useGlobalContext();
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
            <Link
              to={`/places/${id}`}
              className="card"
              key={id}
              onClick={() => setCurrentPage(null)}
            >
              <img src={img} alt={title} />
              <footer>
                <p>{title}</p>
              </footer>
            </Link>
          );
        })}
        {data.map((place) => {
          const { id, title, thumb } = place;
          return (
            <Link
              to={`/places/${id}`}
              className="card"
              key={id}
              onClick={() => setCurrentPage(null)}
            >
              <img src={thumb} alt={title} />
              <footer>
                <p>{title}</p>
              </footer>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Back to Top
        </button>
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

  /* Choose a location small screen */
  aside {
    margin-top: 100px;
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
  /* Places tiles small screen */
  section {
    padding: 100px 20px;
    background-color: var(--black);
    display: grid;
    grid-template-columns: 1fr;
    .card {
      position: relative;
      z-index: 999;
      margin-bottom: 5px;
      padding: 3px;
      background-color: white;
      border-radius: 3px;
      text-decoration: none;
      overflow: hidden;
      img {
        border-radius: 3px;
        display: block;
        max-width: 100%;
      }
      footer {
        width: calc(100% - 6px);
        position: absolute;
        bottom: 3px;
        height: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        border-radius: 0 0 3px 3px;
        p {
          text-align: center;
          font-weight: 500;
          color: var(--white);
        }
      }
    }
    .card:hover {
      footer {
        height: 50px;
        opacity: 1;
      }
    }
  }

  /* ------------- */
  /* Media Queries */
  /* ------------- */

  @media (min-width: 320px) {
    .text-box {
      width: 320px;
    }
  }

  @media (min-width: 600px) {
    section {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 500px 1fr 60px;
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
      background-color: rgba(100, 200, 240, 0.5);
      padding: 10px 10px 200px 10px;
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  @media (min-width: 1100px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Places;
