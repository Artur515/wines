import React, { useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import style from './style.module.scss';

const Pagination = ({
  winePerPage, totalWine, paginate, currentPage,
}) => {
  const totalPages = Math.ceil(totalWine / winePerPage);

  const handlePageChange = useCallback(({ selected }) => {
    paginate(selected + 1);
  }, [paginate]);

  const safeCurrentPage = Number.isFinite(currentPage)
    ? Math.min(Math.max(currentPage, 1), totalPages)
    : 1;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={style.center} aria-label="Pagination">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
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
