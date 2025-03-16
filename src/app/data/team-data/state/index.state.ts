import { GetterLoadingState } from '@dmc/ngrx-helpers';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ascend } from 'ramda';
import { Company } from 'src/app/models';

export interface CompanyListState {
  data: EntityState<Company>;
  loading: GetterLoadingState;
}

export const dataIdSelector = (v: Company) => v.code;
export const sortComparer = ascend<Company>((v) => v.code);

export const dataAdapter = createEntityAdapter<Company>({
  selectId: dataIdSelector,
  sortComparer,
});
