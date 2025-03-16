import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { NowService } from 'src/app/core/services/now.service';
import { createLoader } from '@dmc/ngrx-helpers';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { CompanyListApiService } from './company-list-api.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyListLoaderService {
  constructor(
    private api: CompanyListApiService,
    private store: Store,
    private now: NowService,
  ) {}

  public readonly load$ = createLoader({
    actions: actions.api.get,
    selector: selectors.loading.shouldLoad,
    apiCall: () => this.api.getList(),
    store: this.store,
    now: () => this.now.jsonDateNow(),
  });
}
