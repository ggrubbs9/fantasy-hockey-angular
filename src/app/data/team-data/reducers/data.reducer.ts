import { createReducer, on } from '@ngrx/store';

import { Team } from 'src/app/models';
import { api } from '../actions';

import { dataAdapter } from '../state';
import { EntityState } from '@ngrx/entity';

export const initialState = dataAdapter.getInitialState();

export const dataReducer = createReducer<EntityState<Team>>(
  initialState,
  on(api.get.succeeded, (state, action) =>
    dataAdapter.setAll(action.payload, state),
  ),
);
