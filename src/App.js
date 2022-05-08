import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context';

import Main from './views/Main';
import Login from './views/Login';
import Details from './views/Details';
import Faqs from './views/Faqs';
import RouteNotFound from './views/RouteNotFound';
import './App.css';

import { BREAKPOINTS, COLORS } from './constants';

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, breakpoints: BREAKPOINTS }}>
      <AppProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Swapihoum site - Part of Houm.cl</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="*" element={<RouteNotFound message="404 - Sorry, Route destroyed by the Galactic Empire!" />} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
