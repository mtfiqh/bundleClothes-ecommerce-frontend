import React, { useState } from "react";
import CarouselItemHome from "./CarouselItemHome";

const CarouselHome = () => {
  const [now, setNow] = useState(0);
  const items = [
    {
      image:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211batch10-aum-251-sale_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=65&usm=15&vib=3&w=1000&s=33569c79e8d5ceadba568352e3794f8c",
      caption: "",
    },
  ];

  return (
    <div id="carouselHome" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {items.map((item, index) => (
          <li
            key={index}
            data-target="#carouselHome"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <CarouselItemHome key={index} index={index} item={item} />
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselHome"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselHome"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselHome;
