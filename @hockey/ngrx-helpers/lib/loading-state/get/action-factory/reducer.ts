import { ReducerTypes } from '@ngrx/store';
import { GetterLoadingState } from '../models';
import { GetterActions, GetterActionsWithId, GetterActionsWithoutId } from './models';
type GetterActionsExploded<TID, T extends GetterActions<any, TID>> = (T['started'] | T['succeeded'] | T['failed'] | T['finished'])[];
export declare function handleGetterActions<TPayload>(actions: GetterActionsWithoutId<TPayload>): ReducerTypes<GetterLoadingState, GetterActionsExploded<never, GetterActionsWithoutId<TPayload>>>[];
export declare function handleGetterActions<TID, TPayload, TState extends Record<string, any>>(actions: GetterActionsWithId<TPayload, TID>, idToArray: (id: TID) => string[]): ReducerTypes<TState, GetterActionsExploded<TID, GetterActionsWithId<TPayload, TID>>>[];
export {};
