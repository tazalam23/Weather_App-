import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SearchResult from './Components/SearchResult';
import WeatherDetail from './Components/WeatherDetail';
import Search from './Components/Search';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search/:country" element={<SearchResult />} />
          <Route path="/search/:country/:lon/:lat" element={<WeatherDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
