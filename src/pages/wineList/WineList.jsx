import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import WINES_PER_PAGE from '../../constants/wineConstants';
import fetchWines from '../../store/thunks/wineThunk';
import WineSelectors from '../../store/selectors/winesSelectors';
import { setCurrentPage } from '../../store/winesSlice';
import styles from './style.module.scss';
import Loader from '../../components/loader';
import WineCard from '../../components/wineCard';
import Pagination from '../../components/pagination';

function WineList({ wineType }) {
  const dispatch = useDispatch();
  const list = useSelector(WineSelectors.selectWinesList);
  const currentPage = useSelector(WineSelectors.selectCurrentPage);
  const currentWine = useSelector(WineSelectors.selectCurrentWine);
  const isLoading = useSelector(WineSelectors.selectWinesLoading);
  const errors = useSelector(WineSelectors.selectWinesErrors);

  useEffect(() => {
    dispatch(fetchWines(wineType));
  }, [dispatch, wineType]);

  const onPaginate = useCallback((pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Button />
      </div>
      <div className={styles.list}>
        {isLoading && <Loader />}
        {!isLoading && errors && <div>{errors || 'Failed to load wines.'}</div>}
        {!isLoading && !errors && currentWine.map((el, index) => (
          <div
            key={`${el.id}-${currentPage}`}
            className={styles.cardWrapper}
            style={{ '--delay': `${index * 25}ms` }}
          >
            <WineCard props={el} />
          </div>
        ))}
      </div>
      <div className={styles.bottomBar}>
        <Pagination
          winePerPage={WINES_PER_PAGE}
          totalWine={list.length}
          paginate={onPaginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default WineList;
