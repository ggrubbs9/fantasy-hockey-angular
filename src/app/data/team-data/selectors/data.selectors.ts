import { createSelector } from '@ngrx/store';
import { dataAdapter } from '../state';
import { companyListFeatureSelector } from './feature.selector';

const companyStateSelector = createSelector(
  companyListFeatureSelector,
  (r) => r.data,
);

const companyListSelector = dataAdapter.getSelectors();

export const companyList = createSelector(
  companyStateSelector,
  companyListSelector.selectAll,
);

export const dict = createSelector(
  companyStateSelector,
  companyListSelector.selectEntities,
);
