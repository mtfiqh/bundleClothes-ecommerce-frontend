import React from "react";

const CarouselItemHome = ({ index, item: { caption, image } }) => {
  return (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        src={image}
        className="d-block w-100 rounded"
        alt="Carousel Item"
        style={{ height: "176px" }}
      />
      <div
        className="carousel-caption d-none d-md-block rounded"
        style={caption ? { backgroundColor: "#66666650" } : {}}
      >
        <p className="text-dark">{caption}</p>
      </div>
    </div>
  );
};

export default CarouselItemHome;
