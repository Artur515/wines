import { createSelector } from 'reselect';
import WINES_PER_PAGE from '../../constants/wineConstants';

const selectWinesState = (state) => state.wines;

const selectWinesList = createSelector(
  [selectWinesState],
  (wines) => wines.list,
);

const selectCurrentPage = createSelector(
  [selectWinesState],
  (wines) => wines.currentPage,
);

const selectWinesLoading = createSelector(
  [selectWinesState],
  (wines) => wines.isLoading,
);

const selectWinesErrors = createSelector(
  [selectWinesState],
  (wines) => wines.errors,
);

const selectCurrentWine = createSelector(
  [selectWinesList, selectCurrentPage],
  (list, currentPage) => {
    const indexLastWine = currentPage * WINES_PER_PAGE;
    const indexFirstWine = indexLastWine - WINES_PER_PAGE;
    return list.slice(indexFirstWine, indexLastWine);
  },
);

const WineSelectors = {
  selectWinesList,
  selectCurrentPage,
  selectWinesLoading,
  selectWinesErrors,
  selectCurrentWine,
};

export default WineSelectors;
