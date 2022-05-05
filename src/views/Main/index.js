import React, { useContext, useState, useCallback } from 'react'
import NavBar from '../../components/NavBar';
import CardContainer from '../../components/CardContainer';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';

import { AppContext } from '../../context';
import  usePlanets  from '../../hooks/usePlanets'

const Main = props => {
  const [search, setSearch] = useState('')
  const data = useContext(AppContext)
  const { planets: planetsContext, setPlanetQuery, loading} = data;
  const { planets, planetsQty } = usePlanets(planetsContext);

  const handleSearch = () => {
    setPlanetQuery(search)
  }

  return (
    <>
      <NavBar/>
      { loading ? 
        <Loader/> : 
        <>
          <SearchBar
            onChange={setSearch}
            onSearch={handleSearch}
            placeholder='Search a planet here!'
            value={search}
          />
          <CardContainer data={planets} isLoading={loading}/>
        </>
      }
    </>
  )
};

export default Main;