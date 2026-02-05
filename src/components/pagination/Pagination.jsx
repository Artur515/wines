import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import style from './style.module.scss';

const Pagination = ({
  winePerPage, totalWine, currentPage, onPaginate,
}) => {
  const totalPages = Math.ceil(totalWine / winePerPage);

  const handlePageChange = useCallback(({ selected }) => {
    onPaginate(selected + 1);
  }, [onPaginate]);

  const safeCurrentPage = Number.isFinite(currentPage)
    ? Math.min(Math.max(currentPage, 1), totalPages)
    : 1;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav aria-label="Pagination">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={safeCurrentPage - 1}
        containerClassName={style.pagination}
        pageClassName={style.pageItem}
        pageLinkClassName={style.pageLink}
        activeClassName={style.active}
        previousLabel="‹"
        nextLabel="›"
        previousClassName={style.pageItem}
        nextClassName={style.pageItem}
        previousLinkClassName={style.pageLink}
        nextLinkClassName={style.pageLink}
        breakLabel="..."
        breakClassName={style.ellipsis}
        breakLinkClassName={style.ellipsis}
        disabledClassName={style.disabled}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
};

export default Pagination;

Pagination.propTypes = {
  winePerPage: PropTypes.number.isRequired,
  totalWine: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};
