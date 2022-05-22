import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const PlacesTiles = () => {
  const { locationList, setLocation, setCurrentPage } = useGlobalContext();
  return (
    <Wrapper className="overflow-wrapper">
      {locationList.map((place) => {
        const { id, urlLoc, location, thumb } = place;
        return (
          <Link
            to={`/places/${urlLoc}`}
            className="card"
            key={id}
            onClick={() => {
              setLocation(place);
              setCurrentPage("location");
            }}
          >
            <img src={thumb} alt={location} />
            <footer>
              <p>{location}</p>
            </footer>
          </Link>
        );
      })}
      <div className="btn-wrapper">
        <button
          type="button"
          className="scroll-to-top-btn"
          onClick={() => {
            const scrollBox = document.querySelector(".overflow-wrapper");
            scrollBox.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 30px;

  .card {
    position: relative;
    height: 160px;
    padding: 2px;
    background-color: var(--white);
    border-radius: 3px;
    text-decoration: none;
    overflow: hidden;

    img {
      width: 100%;
      height: 154px;
      border-radius: 3px;
      display: block;
      object-fit: cover;
    }

    footer {
      position: absolute;
      bottom: 2px;
      width: calc(100% - 4px);
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

  .scroll-to-top-btn {
    width: 200px;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 3px;
    background-color: transparent;
    color: var(--off-white);
    font-size: 2rem;
  }

  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-to-top-btn:hover {
    cursor: pointer;
  }

  @media (min-width: 480px) {
    .card {
      height: 200px;
      img {
        height: 194px;
      }
    }
    .card:hover {
      footer {
        height: 80px;
      }
    }
  }

  @media (min-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 50px;
    overflow-y: scroll;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    .btn-wrapper {
      grid-column: 1 / 3;
    }
  }
`;

export default PlacesTiles;
