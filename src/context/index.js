import React, { createContext, useState, useMemo } from 'react';
import { getPlanets, getPlanetsSearch, getPlanetsPage } from '../api';

export const AppContext = createContext();
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState({});
  const [pageToGo, setPageToGo] = useState(null);
  const [planetQuery, setPlanetQuery] = useState(null);

  useMemo(() => {
    setLoading(true)
    getPlanets()
      .then(res => {
        setPlanets(res)
        setLoading(false)
      });
  },[]);

  useMemo(() => {
    if (pageToGo) {
      setLoading(true)
      getPlanetsPage(pageToGo)
      .then(res => { 
        console.log(333, res)
        setPlanets(res)
        setLoading(false)
      });
    }
  },[pageToGo]);

  useMemo(() => {
    if (planetQuery) {
      setLoading(true)
      getPlanetsSearch(planetQuery)
        .then(res => { 
          setPlanets(res)
          setLoading(false)
        });
    }
  },[planetQuery]);

  return(
    <Provider value={{planets, setPlanets, setPlanetQuery, setPageToGo, pageToGo, loading}}>
        {children}
    </Provider>
  );
}
