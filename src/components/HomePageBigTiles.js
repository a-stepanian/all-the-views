import React from "react";
import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const HomePageBigTiles = () => {
  const { setPageSelected } = useGlobalContext();
  return (
    <Wrapper>
      <Link to="/places/msh" className="card">
        <h4>
          Mt. St. Helens
          <GoArrowRight className="arrow" />
        </h4>
        <img src="/img-norwaypass.jpg" alt="Mount St Helens" />
      </Link>
      <Link to="/places/placeholderpark" className="card">
        <h4>
          Placeholder Park
          <GoArrowRight className="arrow" />
        </h4>
        <img src="/img-metalake.jpg" alt="Meta Lake" />
      </Link>
      <Link
        to="/places"
        className="card"
        onClick={() => setPageSelected("places")}
      >
        <h4>
          See all locations...
          <GoArrowRight className="arrow" />
        </h4>
        <img src="/img-spiritlake.jpg" alt="Meta Lake" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 260px;
    padding: 0 25px;
    background-color: rgb(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    .card {
      position: relative;
      width: 240px;
      height: 180px;
      margin: 0 25px;
      h4 {
        transition: 0.2s;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        color: var(--white);
        position: absolute;
        top: 0;
        .arrow {
          position: absolute;
          top: 0;
          right: 15px;
          opacity: 0;
          transition: 0.2s;
          font-size: 1.3rem;
        }
      }
      img {
        object-fit: cover;
        max-height: 100%;
      }
    }
    .card:hover h4 {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px;
      .arrow {
        top: 10px;
        opacity: 1;
      }
    }
  }
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.8);
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    overflow: auto;
      .card {
        margin: 5px;
        width: 240px;
        height: 180px;
        position: relative;
        h4 {
          transition: 0.2s;
          font-size: 1rem;
          font-weight: 500;
          text-align: center;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          color: var(--white);
          position: absolute;
          top: 0;
          .arrow {
            position: absolute;
            top: 0;
            right: 15px;
            opacity: 0;
            transition: 0.2s;
            font-size: 1.3rem;
          }
        }
        img {
          object-fit: cover;
          max-height: 100%;
        }
      }
      .card:hover h4 {
        background-color: rgba(0, 0, 0, 0.6);
        padding: 10px;
        .arrow {
          top: 10px;
          opacity: 1;
        }
      }
    }

`;

export default HomePageBigTiles;
