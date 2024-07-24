// src/App.js
import React from 'react';
import SeriesList from './components/SeriesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 10 Netflix Series</h1>
      </header>
      <main>
        <SeriesList />
      </main>
    </div>
  );
}

export default App;
