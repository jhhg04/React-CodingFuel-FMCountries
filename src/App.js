import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode} />
      <Routes>
        <Route
          path='/'
          element={
            <div className='app_body'>
              <div className='inputs'>
                <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
                  <SearchIcon />
                  <input type='text' placeholder='Search for a country...' />
                </div>
                <div className={`select_region ${darkMode ? 'darkMode' : ''}`}>
                  <select>
                    <option>All</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europa</option>
                  </select>
                </div>
              </div>
              <div className='countries'>
                <Country darkMode={darkMode} />
              </div>
            </div>
          }
        />
        <Route
          path='country-details'
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
