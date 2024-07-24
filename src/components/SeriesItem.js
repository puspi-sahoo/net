// src/components/SeriesItem.js
import React from 'react';
import './SeriesItem.css';

const SeriesItem = ({ title, description, image, rating }) => {
  return (
    <div className="series-item">
      <img src={image} alt={title} className="series-image" />
      <div className="series-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="rating">Rating: {rating}</div>
      </div>
    </div>
  );
};

export default SeriesItem;
