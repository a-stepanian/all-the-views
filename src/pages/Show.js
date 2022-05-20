import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Loading, Error, FullScreen } from "../components";
import styled from "styled-components";
import data from "../data";

const Show = () => {
  const {
    setCurrentPage,
    fullScreen,
    setFullScreen,
    location,
    setLocation,
    view,
    setView,
  } = useGlobalContext();
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    setCurrentPage("view");
    setLocation(data.find((place) => place.urlLoc === params.id));
    const foundView = data.find((place) => place.id === params.viewId);
    if (foundView) {
      setView(foundView);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Wrapper>
        <header>
          <h1>{view.title}</h1>
          <h2>
            <Link to={`/places/${location.urlLoc}`}>{view.location}</Link>
          </h2>
        </header>
        <div className="img-container">
          <img
            src={view.img}
            alt={view.title}
            onClick={() => setFullScreen(true)}
          />
          <p className="additional-info">
            Additional info at{" "}
            <a target="_blank" href={view.url}>
              {view.url}
            </a>
          </p>
        </div>
        <div className="getting-there">
          <h3>Getting There</h3>
          {view.description}
          {view.season && <p className="note">Note: {view.season}</p>}
        </div>
      </Wrapper>
      {fullScreen && <FullScreen />}
    </>
  );
};

const Wrapper = styled.main`
  padding: 100px 10px 30px;
  background-color: var(--green);
  header {
    padding: 30px 0;
    h1 {
      margin-bottom: 5px;
      font-size: 2rem;
      line-height: 2.1rem;
      font-weight: 300;
      color: var(--off-white);
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
    h2 {
      font-size: 1.1rem;
      a {
        color: var(--black);
      }
    }
    h2 a:hover {
      color: rgb(16, 21, 16);
    }
  }

  .img-container {
    position: relative;
    img {
      width: 100%;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
    .additional-info {
      position: absolute;
      bottom: 4px;
      right: 0;
      font-weight: 100;
      font-size: 0.8rem;
      color: var(--white);
      background-color: rgba(0, 0, 0, 0.5);
      a {
        color: var(--white);
      }
    }
  }

  .img-container:hover {
    cursor: zoom-in;
  }

  .getting-there {
    padding: 30px 0;
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
    color: var(--off-white);
    h3 {
      margin-bottom: 5px;
      font-size: 2rem;
      line-height: 2.1rem;
      font-weight: 300;
      color: var(--off-white);
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  .note {
    margin-top: 30px;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  /*------------------------------------------------*/
  /*     Media Queries                              */
  /*------------------------------------------------*/

  @media (min-width: 768px) {
    padding: 100px 5% 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 2%;
    header {
      grid-row: 1 / 2;
      grid-column: 1 / 4;
    }
    .img-container {
      grid-row: 2 / 3;
      grid-column: 1 / 3;

      img {
        height: 100%;
        object-fit: cover;
      }

      .additional-info {
        bottom: 0;
      }
    }
    .getting-there {
      background-color: var(--off-white);
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      color: var(--black);
      font-weight: 400;
      font-size: 0.9rem;
      line-height: 1.2rem;
      padding: 10px;
      grid-row: 2 / 3;
      grid-column: 3 / 4;
      h3 {
        color: var(--green);
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 992px) {
    padding: 100px 10% 30px;
  }

  @media (min-width: 1200px) {
    padding: 100px 15% 30px;
  }
`;

export default Show;
