import React, { useEffect, useState } from 'react';
import baseURL from '../../api/api';
import Loader from '../../components/loader/Loader';
import WinePresent from '../../components/winePresent/WinePresent';
import styles from './style.module.scss';
import Pagination from '../../components/pagination/Pagination';
import Button from '../../components/button/Button';

function RedWines({ match }) {
  const { path } = match;
  const [redWine, setRedWine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [winePerPage] = useState(20);

  // get  current wine
  const indexLastWine = currentPage * winePerPage;
  const indexFirstWine = indexLastWine - winePerPage;
  const currentWine = redWine.slice(indexFirstWine, indexLastWine);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    fetch(baseURL + path)
      .then((resp) => resp.json())
      .then((data) => {
        setRedWine(data);
        setLoading(false);
      });
    return () => setRedWine([]);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.wrapper}>
      <Button />
      {loading ? <Loader /> : currentWine.map((el) => <WinePresent key={el.id} props={el} />)}
      <Pagination winePerPage={winePerPage} totalWine={redWine.length} paginate={paginate} />
    </div>
  );
}

export default RedWines;
