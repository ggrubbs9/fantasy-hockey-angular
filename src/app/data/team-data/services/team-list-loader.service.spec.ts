import { TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockNowService } from 'src/app/core/services/testing-now-service';
import { EMPTY, firstValueFrom, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { CompanyListLoaderService } from './company-list-loader.service';
import { CompanyListApiService } from './company-list-api.service';

describe('CompanyListLoaderService', () => {
  let service: CompanyListLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectors.loading.shouldLoad,
              value: false,
            },
          ],
        }),
        provideMockNowService(),
        {
          provide: CompanyListApiService,
          useValue: {
            getList: jasmine.createSpy('getList').and.returnValue(EMPTY),
          },
        },
      ],
    });
    service = TestBed.inject(CompanyListLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make the API call for list', async () => {
    const apiService = TestBed.inject(CompanyListApiService);
    (apiService.getList as jasmine.Spy).and.returnValue(of([]));

    const store: MockStore = TestBed.inject(Store) as MockStore;
    const dispatchSpy = spyOn(store, 'dispatch');
    store.overrideSelector(selectors.loading.shouldLoad, true);

    await firstValueFrom(service.load$);

    await expect(dispatchSpy).toHaveBeenCalledTimes(3);
    await expect(dispatchSpy.calls.argsFor(0)).toEqual([
      actions.api.get.started(),
    ]);
    await expect(dispatchSpy.calls.argsFor(1)).toEqual([
      actions.api.get.succeeded({
        when: 'datetime',
        payload: [],
      }),
    ]);
    await expect(dispatchSpy.calls.argsFor(2)).toEqual([
      actions.api.get.finished(),
    ]);

    await expect(apiService.getList).toHaveBeenCalledOnceWith();
  });
});
