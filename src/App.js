import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context';

import Main from './views/Main'
import Faqs from './views/Faqs'
import Details from './views/Details'
import './App.css';

import { BREAKPOINTS, COLORS } from './constants';


function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/details/:id' exact element={<Details/>} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
