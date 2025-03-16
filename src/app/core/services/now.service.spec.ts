import { TestBed } from '@angular/core/testing';

import { NowService } from './now.service';
import { addMinutes } from 'date-fns';

describe('NowService', () => {
  let service: NowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('use mock clock', () => {
    let clock: jasmine.Clock;
    const clockString = '2020-02-29T13:33:45.000Z';
    const startDate = new Date(clockString);

    beforeEach(() => {
      clock = jasmine.clock().install();
      clock.mockDate(startDate);
    });

    it('should return now in a JSON string', () => {
      expect(service.jsonDateNow()).toBe(clockString);
    });

    it('after tick', () => {
      const newString = addMinutes(startDate, 50).toJSON();
      clock.tick(50 * 60 * 1000);

      expect(service.jsonDateNow()).toBe(newString);
    });

    afterEach(() => {
      clock.uninstall();
    });
  });
});
