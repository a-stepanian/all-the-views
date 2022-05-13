import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../data";
import { BiShowAlt, BiHide } from "react-icons/bi";

const Show = () => {
  let params = useParams();
  const { title, img, location, description, season, url } = data.find(
    (place) => place.id === params.id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <article>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <button>
          Show Info <BiShowAlt />
        </button>
        <button>
          Hide Info <BiHide />
        </button>
        <p>
          {description} <span>Note: {season}</span>
        </p>
        <p>
          Additional Information about the hike can be found at{" "}
          <a target="_blank" href={url}>
            {url}
          </a>
        </p>
      </article>
      <img src={img} alt={title} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 100px 0 0 0;
  background-color: var(--black);
  article {
    max-width: 700px;
    margin: 0 0 50px 0;
    padding: 10px;
    h1 {
      margin-bottom: 5px;
      font-size: 2.4rem;
      line-height: 2.1rem;
      font-weight: 300;
      color: var(--off-white);
    }
    h2 {
      margin-bottom: 20px;
      font-size: 1.2rem;
      color: var(--green);
    }
    p {
      font-size: 1rem;
      line-height: 1.6rem;
      font-weight: 300;
      color: var(--off-white);
      span {
        background-color: rgba(255, 0, 0, 0.3);
      }
    }
  }
  img {
    width: 100%;
  }
  @media (min-width: 900px) {
    article {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      width: 0;
      overflow: hidden;
      transition: 0.5s;
    }
    article:hover {
      width: 700px;
    }
  }
`;

export default Show;
