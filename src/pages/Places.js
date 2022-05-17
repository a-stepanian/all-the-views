import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { LogoColumnBigScreen, Loading, PlacesTiles } from "../components";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import styled from "styled-components";
import data from "../data";

const Places = () => {
  const { setLocationList, setCurrentPage, setLocation, setView } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  const getUniqueLocations = () => {
    // Make an array of the unique locations from the data
    const allLocations = data.map((place) => place.location);
    const uniquePlaces = new Set(allLocations);
    // Find first place from the data with each unique location
    // This will be so we can map over each unique location and display the image of that first place
    const locationArray = []; // Array that will be used for rendering the unique parks/locations.
    for (let location of uniquePlaces) {
      const foundPlace = data.find((place) => place.location === location);
      locationArray.push(foundPlace);
    }
    setLocationList(locationArray);
  };

  useEffect(() => {
    setIsLoading(true);
    getUniqueLocations();
    window.scrollTo(0, 0);
    setCurrentPage("places");
    setLocation(null);
    setView(null);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <aside className="instructions">
        <div className="text-box">
          <h2>Choose a location</h2>
          <div className="accent-line"></div>
          <p>Click on an image to learn more.</p>
        </div>
      </aside>
      <section>
        <PlacesTiles />
        <button
          className="btn up-btn"
          type="button"
          onClick={() => {
            const scrollBox = document.querySelector(".overflow-wrapper");
            scrollBox.scrollBy({
              top: -230,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
        <button
          className="btn down-btn"
          type="button"
          onClick={() => {
            const scrollBox = document.querySelector(".overflow-wrapper");
            scrollBox.scrollBy({
              top: 230,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <BsFillArrowDownSquareFill />
        </button>{" "}
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
  .instructions {
    margin-top: 100px;
    .text-box {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 3rem;
        line-height: 3rem;
        color: var(--off-white);
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
        color: var(--off-white);
        letter-spacing: 0.1rem;
      }
    }
  }

  /* Location tiles small screen */

  section {
    padding: 100px 30px;
    width: 100%;
    background-color: var(--black);
  }

  .btn {
    display: none;
  }

  /* ------------- */
  /* Media Queries */
  /* ------------- */

  @media (min-width: 320px) {
    .text-box {
      width: 320px;
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 380px 1fr 60px;
    align-items: start;

    .instructions {
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
      position: relative;
      height: calc(100vh - 200px);
      background-color: var(--green);
      margin: 120px 0 80px;
      padding: 0;
    }

    .btn {
      position: absolute;
      left: -1.5rem;
      display: block;
      height: 3rem;
      width: 3rem;
      font-size: 3rem;
      border: none;
      border-radius: 0.5rem;
      background-color: var(--light-green);
      color: var(--off-white);
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
      transition: 0.2s;
    }
    .btn:hover {
      cursor: pointer;
      transform: translateY(-2px);
      box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.9);
    }
    .up-btn {
      top: calc(50% - 3.2rem);
    }
    .down-btn {
      bottom: calc(50% - 3.2rem);
    }
  }

  @media (min-width: 1200px) {
    .btn {
      left: calc(50% - 2.05rem);
    }
    .up-btn {
      top: -2rem;
    }
    .down-btn {
      bottom: -2rem;
    }
  }
`;

export default Places;
