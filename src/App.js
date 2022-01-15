import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request.js';
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      {/* fetchNetflixOriginals
      fetchTrending
      fetchActionMovies
      fetchComedyMovies 
      fetchRomanceMovies
      fetchHorrorMovies
      fetchDocumentaries */}
      <Nav/>
      <Banner/>
      <Row title="Netflixoriginals" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="TrendingNow" fetchURL={requests.fetchTrending}/>
      <Row title="ActionMovies" fetchURL={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="HorrorMovies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
