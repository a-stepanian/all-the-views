import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { LogoColumnPark, Loading, Error } from "../components";
import styled from "styled-components";
import data from "../data";

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
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <Wrapper>
      <section>
        <div className="text-box">
          <h2>{location.location}</h2>
          <div className="accent-line"></div>
          <p>{location.locationDescription}</p>
        </div>
        {views.map((place) => {
          const { id, urlLoc, title, thumb } = place;
          return (
            <Link to={`/places/${urlLoc}/${id}`} className="card" key={id}>
              <img src={thumb} alt={title} />
            </Link>
          );
        })}
        <div className="btn-wrapper">
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
        </div>
      </section>
      <LogoColumnPark />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--black);

  /* Park info small screen */

  section {
    padding: 150px 5% 50px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }

  .text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1.4rem;
      line-height: 1.3rem;
      color: var(--off-white);
      text-align: center;
    }
    .accent-line {
      width: 100px;
      margin: 20px 0;
      border-top: 8px solid var(--green);
    }
    p {
      font-size: 0.8rem;
      font-weight: 200;
      line-height: 1.4rem;
      color: var(--off-white);
      letter-spacing: 0.05rem;
    }
  }

  /* Places tiles small screen */

    .card {
      position: relative;
      padding: 2px;
      background-color: var(--white);
      border-radius: 3px;
      text-decoration: none;
      overflow: hidden;
      transition: 0.2s;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
      img {
        border-radius: 3px;
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 250px;
      }
    }
    .card:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
    }

    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 200px;
      margin: 50px 0;
      padding: 5px;
      border: none;
      border-radius: 3px;
      background-color: transparent;
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

  @media (min-width: 480px) {
    section {
      grid-template-columns: 1fr 1fr;

      .text-box {
        grid-column: 1 / 3;
      }
      
      .btn-wrapper {
        grid-column: 1 / 3;
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 60px;
    align-items: start;

    section {
      .text-box {
        padding-top: 10px;
        justify-content: flex-start;
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

  @media (min-width: 992px) {
    section {
      grid-template-columns: 1fr 1fr 1fr;
      
      .btn-wrapper {
        grid-column: 1 / 4;
      }
    }

  }
  @media (min-width: 1200px) {
    section {
      padding-left: 15%;
      padding-right: calc(15% - 60px);
    }
  }
`;

export default Park;
