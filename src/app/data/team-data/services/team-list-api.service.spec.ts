import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { provideMockMainAPI } from 'src/app/core/mock-api-path.token';
import { Company } from 'src/app/models';
import { CompanyListApiService } from './company-list-api.service';

describe('CompanyListApiService', () => {
  let service: CompanyListApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockMainAPI()],
    });
    service = TestBed.inject(CompanyListApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getList()', () => {
    it('should call company list api', async () => {
      const response: Company[] = [
        {
          code: 2000,
          salesOrg: 'A001',
        },
        {
          code: 2120,
          salesOrg: 'A208',
        },
      ];

      const sub = service.getList().subscribe(async (data) => {
        await expect(data).toEqual(response);
      });

      const expectedUrl = '[MAIN HOST API]/v1/Companies';

      const req = httpTestingController.expectOne(expectedUrl.toString());
      await expect(req.request.method).toEqual('GET');
      req.flush(response);

      httpTestingController.verify();

      return () => {
        sub.unsubscribe();
      };
    });
  });
});
