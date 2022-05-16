import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data";
import { Link } from "react-router-dom";
import { LogoColumnBigScreen, Loading } from "../components";
import { useGlobalContext } from "../context";
import Error from "./Error";

const Park = () => {
  const { setCurrentPage, location, setLocation, setView } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  const views = data.filter((place) => {
    return place.urlLoc === params.id;
  });

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    setCurrentPage("location");

    const foundPlace = data.find((place) => place.urlLoc === params.id);
    if (foundPlace) {
      setLocation(foundPlace);
    } else {
      setIsError(true);
    }

    setView(null);
    setIsLoading(false);
  }, [location]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <Wrapper>
      <aside className="instructions">
        <div className="text-box">
          <h2>{location.location}</h2>
          <div className="accent-line"></div>
          <p>{location.locationDescription}</p>
        </div>
      </aside>
      <section>
        {views.map((place) => {
          const { id, urlLoc, title, thumb } = place;
          return (
            <Link to={`/places/${urlLoc}/${id}`} className="card" key={id}>
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

  /* Park info small screen */
  .instructions {
    margin-top: 100px;
    .text-box {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 2.4rem;
        line-height: 2.6rem;
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
        font-weight: 200;
        line-height: 1.6rem;
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
      padding: 2px;
      background-color: white;
      border-radius: 3px;
      text-decoration: none;
      overflow: hidden;
      img {
        border-radius: 3px;
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 250px;
      }
      footer {
        width: calc(100% - 4px);
        position: absolute;
        bottom: 2px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        border-radius: 0 0 3px 3px;
        p {
          text-align: center;
          font-weight: 300;
          color: var(--white);
        }
      }
    }
    .card:hover {
      footer {
        height: 80px;
      }
    }

    button {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 3px;
      background-color: var(--green);
      color: var(--white);
      font-size: 2rem;
    }
    button:hover {
      cursor: pointer;
    }
  }

  /* ------------- */
  /* Media Queries */
  /* ------------- */

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 60px;
    align-items: start;

    .instructions {
      margin-top: 100px;
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
      margin-top: 100px;
      background-color: var(--green);
      padding: 30px 30px 200px 30px;
      grid-gap: 30px 30px;
      height: auto;
    }
  }

  @media (min-width: 1000px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Park;
