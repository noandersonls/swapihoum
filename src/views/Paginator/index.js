import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import styled from 'styled-components'

const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  width: 100%;
  overflow: hidden;
  height: 90px;
  bottom: 0;

  .paginator--page {
    cursor: pointer;
    font-weight: 200;
    font-size: 14px;
  }

  .paginator--page-active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    cursor:  pointer;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;


const Paginator = ({ count, onNext, onPrev }) => {
  const [ pages, setPages ] = useState([])
  const [ pageSelected, setPageSelected ] = useState(1)

  const pagesQty = Math.ceil(count / 10);
  const isLastPage = pageSelected === pagesQty;
  const isFirstPage = pageSelected === 1;

  useEffect(() => {
    const pagesArr = [...Array(pagesQty+1).keys()].slice(1);
    setPages(pagesArr);
  }, [count])

  return (
    <StyledPaginator>
      <Button disabled={isFirstPage} onClick={onPrev} title='Previous'/>
      {pages.map(number => {
        return (
          <div
            key={number}
            id={number}
            className={'paginator--page ' + (number === pageSelected ? 'paginator--page-active' : null)}
            onClick={(e) => console.log(e)}
          >
            {number}
          </div>
        );
      })}
      <Button disabled={isLastPage} onClick={onNext} title='Next'/>
    </StyledPaginator>
  )
}

export default Paginator