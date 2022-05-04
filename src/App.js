import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Main from './views/Main'
import Faqs from './views/Faqs'
import Details from './views/Details'
import './App.css';

import { BREAKPOINTS, COLORS } from './constants';


function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="faqs" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
