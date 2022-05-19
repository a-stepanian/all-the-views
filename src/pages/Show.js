import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Loading } from "../components";
import { BiShowAlt, BiHide } from "react-icons/bi";
import styled from "styled-components";
import data from "../data";

const Show = () => {
  const { setCurrentPage, location, setLocation, view, setView } =
    useGlobalContext();
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    setCurrentPage("view");
    setLocation(data.find((place) => place.urlLoc === params.id));
    setView(data.find((place) => place.id === params.viewId));
    setIsLoading(false);
  }, [view]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <header>
        <h1>{view.title}</h1>
        <Link to={`/places/${location.urlLoc}`}>
          <h2>{view.location}</h2>
        </Link>
      </header>
      <img src={view.img} alt={view.title} />
      <p className="getting-there">
        <span>Getting there: </span>
        {view.description}
      </p>{" "}
      <p className="note">Note: {view.season}</p>
      <p className="additional-info">
        Additional info at{" "}
        <a target="_blank" href={view.url}>
          {view.url}
        </a>
      </p>{" "}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 100px 10px 0;
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
    a {
      text-decoration: none;
      h2 {
        font-size: 1.2rem;
        color: var(--black);
      }
    }
  }

  img {
    width: 100%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  p {
    padding: 30px 0;
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
    color: var(--off-white);
    span {
      color: var(--white);
      font-size: 1.1rem;
      font-weight: 400;
    }
    a {
      color: var(--white);
    }
  }

  .note {
    padding: 0 5px;
    width: fit-content;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
  }
`;

export default Show;
