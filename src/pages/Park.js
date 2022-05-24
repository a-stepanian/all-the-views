import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { LogoColumnPark, Loading, Error } from "../components";
import { IoCaretBack } from "react-icons/io5";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="accent-line accent-line2"></div>
          <h3>Choose a view to learn more</h3>
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
      <Link to="/places" className="back">
        <IoCaretBack />
        Back to Places
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--green);
  padding: 96px 0 50px;

  /* Park info small screen */

  section {
    padding-top: 50px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    }

    .back {
      display: flex;
      align-items: center;
      position: absolute;
      top: 100px;
      left: 10px; 
      color: var(--black);
    }

  .text-box {
    grid-column: 1 / 3;
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
      border-top: 8px solid var(--dark-green);
      opacity: 0.5;
    }
    p {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.4rem;
      color: var(--off-white);
      letter-spacing: 0.05rem;
    }
    h3 {
      font-size: 1rem;
      margin: 20px 0 5px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      font-weight: 300;
      line-height: 1.3rem;
      color: var(--bright-green);
    }
  }

  /* Places tiles small screen */

    .card {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
      img {
        border-radius: 3px;
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 250px;
      }
    }

    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 1 / 3;
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
    padding-left: 5%;
    padding-right: 5%;
    section {
      grid-gap: 20px;
    }
    .card {
      border: 2px solid var(--white);
      background-color: var(--white);
      transition: 0.3s;
    }
    .card:hover {
      outline: 5px solid var(--bright-green);
    }
  }

  @media (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
    section {
      .text-box {
        padding-top: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        .accent-line {
          margin: 20px 0;
        }
        h2 {
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
    
    .accent-line2, h3, .back {
      display: none;
    }
  }

  @media (min-width: 992px) {
    section {
      grid-gap: 25px;
      grid-template-columns: 1fr 1fr 1fr;
      
      .btn-wrapper {
        grid-column: 1 / 4;
      }
    }

  }
  @media (min-width: 1200px) {
    padding-left: 15%;
    padding-right: 15%;
    section {
      grid-gap: 30px;
    }
  }
`;

export default Park;
