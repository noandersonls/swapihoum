import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context';

import Main from './views/Main'
import Login from './views/Login'
import Details from './views/Details'
import Faqs from "./views/Faqs";
//  TRANSFORM TO VIEW
import NotFound from './components/NotFound';
import './App.css';

import { BREAKPOINTS, COLORS } from './constants';

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/details/:id' exact element={<Details/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/faqs' element={<Faqs/>} />
          <Route path='*' element={<NotFound message='404 - Sorry, Route destroyed by the Galactic Empire!'/>} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
