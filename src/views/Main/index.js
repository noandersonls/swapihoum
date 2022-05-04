import React, { useContext } from 'react'
import NavBar from '../../components/NavBar';
import CardContainer from '../../components/CardContainer';

import { AppContext } from '../../context';
import  usePlanets  from '../../hooks/usePlanets'


const Main = props => {
  const data = useContext(AppContext)
  const { planets, planetsQty, loading } = usePlanets(data[0]);
  console.log(loading)


  return (
    <>
      <NavBar/>
      {loading ? <h1>LOADING THE ENTIRE WEB</h1> : <CardContainer data={planets}/> }
    </>
  )
};

export default Main;