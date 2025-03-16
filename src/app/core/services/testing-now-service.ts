import { Provider } from '@angular/core';
import { NowService } from './now.service';

export function provideMockNowService(): Provider {
  return {
    provide: NowService,
    useValue: {
      jsonDateNow: jasmine.createSpy('jsonDateNow').and.returnValue('datetime'),
    },
  };
}
