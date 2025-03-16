import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { NowService } from 'src/app/core/services/now.service';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { TeamListApiService } from './team-list-api.service';
import { createLoader } from '@hockey/ngrx-helpers/lib/loading-state/get/loader-factory/factory';

@Injectable({
  providedIn: 'root',
})
export class TeamListLoaderService {
  constructor(
    private api: TeamListApiService,
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
