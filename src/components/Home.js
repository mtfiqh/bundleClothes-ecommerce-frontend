import React, { Fragment } from "react";
import Products from "./Products";
import CarouselHome from "./CarouselHome";

const Home = () => {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <CarouselHome />
        <Products />
      </div>
    </main>
  );
};

export default Home;
