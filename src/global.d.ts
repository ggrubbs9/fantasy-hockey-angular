import { ServerEnvironment } from './server-environment';

declare global {
  interface Window {
    _env: ServerEnvironment;

    // adobe analytics stuffz
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    digitalData: any;
    _satellite: {
      pageBottom: () => void;
    };

    // used for enabling ECC error responses
    toggleEccNetworkResponse: () => boolean;
  }
}

declare module 'ramda' {
  // need to add this because the default always uses string | number as the key
  // but sometimes I have strongly typed keys for dictionaries, with the keys coming
  // from a const string[], which means the possible values are known at compile time
  export function fromPairs<TKey extends string | number, TValue>(
    pairs: [TKey, TValue][],
  ): Record<TKey, TValue>;
}
