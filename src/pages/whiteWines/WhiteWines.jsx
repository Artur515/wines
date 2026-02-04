import React, { useEffect, useState } from 'react';
import baseURL from '../../api/api';
import styles from '../redWines/style.module.scss';
import Button from '../../components/button/Button';
import Loader from '../../components/loader/Loader';
import WinePresent from '../../components/winePresent/WinePresent';
import Pagination from '../../components/pagination/Pagination';

function WhiteWines({ match }) {
  const { path } = match;
  const [whiteWine, setWhiteWine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [winePerPage] = useState(20);

  // get  current wine
  const indexLastWine = currentPage * winePerPage;
  const indexFirstWine = indexLastWine - winePerPage;
  const currentWine = whiteWine.slice(indexFirstWine, indexLastWine);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    fetch(baseURL + path)
      .then((resp) => resp.json())
      .then((data) => {
        setWhiteWine(data);
        setLoading(false);
      });
    return () => setWhiteWine([]);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.wrapper}>
      <Button />
      {loading ? <Loader /> : currentWine.map((el) => <WinePresent key={el.id} props={el} />)}
      <Pagination winePerPage={winePerPage} totalWine={whiteWine.length} paginate={paginate} />
    </div>
  );
}

export default WhiteWines;
