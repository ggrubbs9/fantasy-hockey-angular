import { GetterActionsWithId, GetterActionsWithoutId } from './models';
export declare function createGetterActions<TPayload, TError = number>(prefix: string): GetterActionsWithoutId<TPayload, TError>;
export declare function createGetterActionsWithId<TPayload, TID extends Record<string, string> | string, TError = number>(prefix: string): GetterActionsWithId<TPayload, TID, TError>;
