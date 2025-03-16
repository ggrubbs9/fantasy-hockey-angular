import {
    INITIAL_GETTER_LOADING_STATE,
    getterSucceeded,
  } from '@dmc/ngrx-helpers';
  import { CompanyListState } from '../state';
  import { companyListFeatureKey } from '../feature-name.const';
  import { lastSuccess } from './loading.selectors';
  
  describe('Company List - LoadingSelectors', () => {
    it('should return the last success', async () => {
      const state: Partial<CompanyListState> = {
        loading: getterSucceeded('hello_world', INITIAL_GETTER_LOADING_STATE),
      };
      await expect(lastSuccess({ [companyListFeatureKey]: state })).toEqual(
        'hello_world',
      );
    });
  });
  