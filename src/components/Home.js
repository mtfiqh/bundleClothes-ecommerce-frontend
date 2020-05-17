import React, { Fragment } from "react";
import Products from "./Products";

const Home = () => {
  const jumbotron = {
    paddingBottom: "150px",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    backgroundImage:
      "url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211batch10-aum-251-sale_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=65&usm=15&vib=3&w=1000&s=33569c79e8d5ceadba568352e3794f8c)",
    backgroundSize: "100% 170%",
  };

  return (
    <Fragment>
      <div className="card-panel grey lighten-2" style={jumbotron}>
        <div className="container">
          <h1>Clothes Of The Day</h1>
          <p>
            <b>The best clothes in the Bundle Clothes now</b>
          </p>
        </div>
      </div>
      <div className="container">
        <Products />
      </div>
    </Fragment>
  );
};

export default Home;
