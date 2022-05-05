import React, { createContext, useState, useMemo } from 'react';
import { getPlanets, getPlanetsSearch } from '../api';

export const AppContext = createContext();
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState({});
  const [planetQuery, setPlanetQuery] = useState(null);
  
  useMemo(() =>{
    if (planetQuery) {
      setLoading(true)
      getPlanetsSearch(planetQuery)
        .then(res => { 
          setPlanets(res)
          setLoading(false)
        });
    } else {
      setLoading(true)
      getPlanets()
        .then(res => {
          setPlanets(res)
          setLoading(false)
        });
    }
  },[planetQuery]);

  return(
    <Provider value={{planets, setPlanets, setPlanetQuery, loading}}>
        {children}
    </Provider>
  );
}
