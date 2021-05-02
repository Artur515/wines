import React from 'react';
import style from './style.module.css'

const Pagination = ({winePerPage, totalWine, paginate}) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalWine / winePerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className={style.center}>
            <div className={style.pagination}>
                <ul>
                    {
                        pageNumber.map(number => (
                            <li key={number} onClick={() => paginate(number)}>{number}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Pagination;