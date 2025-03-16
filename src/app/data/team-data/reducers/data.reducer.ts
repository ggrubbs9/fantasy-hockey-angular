import { createReducer, on } from '@ngrx/store';

import { EntityState } from '@ngrx/entity';
import { Company } from 'src/app/models';
import { api } from '../actions';

import { dataAdapter } from '../state';

export const initialState = dataAdapter.getInitialState();

export const dataReducer = createReducer<EntityState<Company>>(
  initialState,
  on(api.get.succeeded, (state, action) =>
    dataAdapter.setAll(action.payload, state),
  ),
);
