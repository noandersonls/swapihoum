import React, { useContext, useState, useCallback } from 'react'
import NavBar from '../../components/NavBar';
import CardContainer from '../../components/CardContainer';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';

import { AppContext } from '../../context';

const Main = props => {
  const [search, setSearch] = useState('')
  const data = useContext(AppContext)
  const { planets: planetsContext, setPlanetQuery, loading} = data;
  const planetsList = planetsContext.results;

  const handleSearch = () => {
    if (search) {
      setPlanetQuery(search)
    }
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
          <CardContainer data={planetsList}/>
        </>
      }
    </>
  )
};

export default Main;