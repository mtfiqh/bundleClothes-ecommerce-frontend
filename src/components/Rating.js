import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value }) => {
  const stars = [];
  const star = parseInt(value);
  const half_star = value - star > 0 && value - star < 1 ? 1 : 0;
  const empty_star = 5 - (star + half_star);

  const STAR = "STAR";
  const HALF_STAR = "HALF_STAR";
  const EMPTY_STAR = "EMPTY_STAR";

  for (let i = star; i > 0; i--) {
    stars.push(STAR);
  }

  if (half_star > 0) {
    stars.push(HALF_STAR);
  }

  for (let i = empty_star; i > 0; i--) {
    stars.push(EMPTY_STAR);
  }

  stars.push(` (${parseFloat(value).toFixed(2)})`);

  return stars.map((type, index) => {
    switch (type) {
      case STAR:
        return <i key={index} className="fas fa-star"></i>;
      case HALF_STAR:
        return <i key={index} className="fas fa-star-half-alt"></i>;
      case EMPTY_STAR:
        return <i key={index} className="far fa-star"></i>;
      default:
        return <small key={index}>{type}</small>;
    }
  });
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
