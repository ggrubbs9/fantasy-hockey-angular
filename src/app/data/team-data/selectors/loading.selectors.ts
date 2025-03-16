import { errorTypeSelector, getterProperties } from '@dmc/ngrx-helpers';
import { createSelector } from '@ngrx/store';
import { companyListFeatureSelector } from './feature.selector';

const loadingStateSelector = createSelector(
  companyListFeatureSelector,
  (v) => v.loading,
);

export const {
  error,
  hasError,
  hasSucceeded,
  isLoading,
  lastSuccess,
  shouldLoad,
} = getterProperties(loadingStateSelector);

export const errorType = errorTypeSelector(error);
