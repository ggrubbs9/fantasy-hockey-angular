import { ActionReducerMap } from '@ngrx/store';

import { CompanyListState } from '../state';
import { dataReducer } from './data.reducer';
import { loadingReducer } from './loading.reducer';

export const companyListReducer: ActionReducerMap<CompanyListState> = {
  data: dataReducer,
  loading: loadingReducer,
};
