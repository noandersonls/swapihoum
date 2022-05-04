import React, { createContext, useState, useEffect } from 'react';
import { getPlanets } from '../api';

export const AppContext = createContext();
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [planets, setPlanets] = useState({});
  
  useEffect(() =>{
    getPlanets().then(res => setPlanets(res))
  },[]);

  return(
    <Provider value={[planets, setPlanets]}>
        {children}
    </Provider>
  );
}
