import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: rgb(38 50 56 / 15%) 0px 4px 15px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  width: 100%;
  overflow: hidden;
  height: 70px;
  bottom: 0;

  .paginator__page {
    cursor: pointer;
    font-weight: 200;
    font-size: 14px;
  }

  .paginator__page-active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    cursor:  pointer;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

function Paginator({
  count, onSetPage, prev, next, pageToGo,
}) {
  const [pages, setPages] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);

  const pagesQty = Math.ceil(count / 10);
  const isLastPage = pageSelected === pagesQty;
  const isFirstPage = pageSelected === 1;

  useEffect(() => {
    pageToGo && setPageSelected(pageToGo);
  }, [pageToGo]);

  useEffect(() => {
    const pagesArr = [...Array(pagesQty + 1).keys()].slice(1);
    setPages(pagesArr);
  }, [count]);

  const handlePagination = (value) => {
    const pageId = Number(value.match(/=\s*(.*)$/)[1]);
    setPageSelected(pageId);
    onSetPage(pageId);
  };

  return (
    <StyledPaginator>
      <Button disabled={isFirstPage} onClick={() => handlePagination(prev)} title="Previous" />
      {pages.map((number) => (
        <div
          key={number}
          id={number}
          className={`paginator__page ${number === pageSelected ? 'paginator__page-active' : null}`}
          onClick={() => onSetPage(+number)}
        >
          {number}
        </div>
      ))}
      <Button disabled={isLastPage} onClick={() => handlePagination(next)} title="Next" />
    </StyledPaginator>
  );
}

export default Paginator;
