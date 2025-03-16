import { InjectionToken, Provider } from '@angular/core';

export type AllApiHosts = typeof window._env.apiURIs;

export const ALL_API_HOSTS = new InjectionToken<AllApiHosts>(
  '@app - All API Hosts',
);

export function allApiHostsFactory(): AllApiHosts {
  return window._env.apiURIs;
}

export function provideAllApiHosts(): Provider {
  return {
    provide: ALL_API_HOSTS,
    useFactory: allApiHostsFactory,
  };
}

export const MAIN_API_HOST = new InjectionToken<string>('@app - MAIN API Host');

export function mainApiHostFactory(hosts: AllApiHosts): string {
  return hosts.main + '/api';
}

export function provideMainApiHosts(): Provider {
  return {
    provide: MAIN_API_HOST,
    useFactory: mainApiHostFactory,
    deps: [ALL_API_HOSTS],
  };
}
