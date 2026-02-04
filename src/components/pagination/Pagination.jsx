import React from 'react';
import style from './style.module.scss';

function Pagination({ winePerPage, totalWine, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalWine / winePerPage); i += 1) {
    pageNumber.push(i);
  }

  return (
    <div className={style.center}>
      <div className={style.pagination}>
        <ul>
          {pageNumber.map((number) => (
            <li key={number}>
              <button type="button" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
