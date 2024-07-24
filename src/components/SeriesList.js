// src/components/SeriesList.js
import React from 'react';
import SeriesItem from './SeriesItem';
import series from '../data/series';
import './SeriesList.css';

const SeriesList = () => {
  return (
    <div className="series-list">
      {series.map((item) => (
        <SeriesItem
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default SeriesList;
