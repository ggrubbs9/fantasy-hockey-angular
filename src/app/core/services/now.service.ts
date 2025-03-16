import { Injectable } from '@angular/core';
import { ISODateString, jsonDateNow } from './helpers/serialization';

/*
 * This service exists because other services will be using the non-deterministic
 * `jsonDateNow()` function.  For testing purposes, it would be useful to override
 * the return of that function to something constant, so this service exists to
 * provide a mechanism to swap that function just for tests using the DI framework.
 */
@Injectable({
  providedIn: 'root',
})
export class NowService {
  public readonly jsonDateNow: () => ISODateString = jsonDateNow;
}
