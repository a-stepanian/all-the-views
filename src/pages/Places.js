import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoColumnBigScreen, Loading } from "../components";
import data from "../data";
import { useGlobalContext } from "../context";

const Places = () => {
  const { setCurrentPage, setLocation, setView } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);
  const [locationList, setLocationList] = useState([]);

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
  .instructions {
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
    padding: 100px 30px;
    width: 100%;
    background-color: var(--black);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px 30px;

    .card {
      position: relative;
      padding: 2px;
      background-color: var(--white);
      border-radius: 3px;
      text-decoration: none;
      overflow: hidden;

      img {
        border-radius: 3px;
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 200px;
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
      margin-top: 100px;
      padding: 30px;
      background-color: var(--green);
    }
  }

  @media (min-width: 1000px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Places;
