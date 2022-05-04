import React, { useContext } from 'react'
import NavBar from '../../components/NavBar';
import CardContainer from '../../components/CardContainer';
import Loader from '../../components/Loader';

import { AppContext } from '../../context';
import  usePlanets  from '../../hooks/usePlanets'


const Main = props => {
  const data = useContext(AppContext)
  const { planets, planetsQty, loading } = usePlanets(data[0]);

  return (
    <>
      <NavBar/>
      { loading ? <Loader/> : <CardContainer data={planets} isLoading={loading}/> }
    </>
  )
};

export default Main;