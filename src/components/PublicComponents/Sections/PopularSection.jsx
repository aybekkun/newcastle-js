import React from "react";
import Card from "../Card";

const PopularSection = () => {
  return (
    <section className="popular">
      <h3 className="popular__subtitle subtitle">ADVANCE YOUR CAREER</h3>
      <h2 className="popular__title title">Popular topics to learn now</h2>
      <div className="container">
        <div className="popular__inner">
          <div className="card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <a href="#" className="btn popular__btn">
            View all topics
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
