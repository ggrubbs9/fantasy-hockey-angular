import {
    GetterLoadingState,
    INITIAL_GETTER_LOADING_STATE,
    getterReload,
    getterRetry,
    handleGetterActions,
  } from '@dmc/ngrx-helpers';
  
  import { createReducer, on } from '@ngrx/store';
  import * as addMaterialActions from 'src/app/ui/add-material/store/actions';
  import * as editMaterialActions from 'src/app/ui/edit-material/store/actions';
  import * as companyReferenceActions from 'src/app/ui/admin/sub-modules/reference-table/company-reference/store/actions';
  import { api } from '../actions';
  
  export const loadingReducer = createReducer<GetterLoadingState>(
    INITIAL_GETTER_LOADING_STATE,
    ...handleGetterActions(api.get),
    // Do we really want to reload every page init?  Maybe we should just retry?
    // These should hardly ever change...
    on(
      addMaterialActions.form.init,
      editMaterialActions.page.init,
      companyReferenceActions.page.init,
      companyReferenceActions.api.upsertSucceeded,
      getterReload,
    ),
    on(
      addMaterialActions.form.retryInit,
      editMaterialActions.page.retryInit,
      companyReferenceActions.page.retryInit,
      getterRetry,
    ),
  );
  