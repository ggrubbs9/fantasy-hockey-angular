import { ISODateString } from '@hockey/ngrx-helpers/lib/date';
import { Action, Selector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetterActionsWithId, GetterActionsWithoutId } from '../action-factory/models';
export type NullableID<TID> = TID extends Record<string | number | symbol, unknown> ? {
    [key in keyof TID]: TID[key] | null;
} : TID | null;
export interface LoaderFactoryBaseProps<TState> {
    store: Store<TState>;
    now: () => ISODateString;
}
export interface LoaderFactoryPropsWithID<TState, TPayload, TID> extends LoaderFactoryBaseProps<TState> {
    actions: GetterActionsWithId<TPayload, TID>;
    apiCall: (id: TID) => Observable<TPayload>;
    selector: Selector<TState, {
        shouldLoad: boolean;
        id: NullableID<TID>;
    }>;
    filterID: (id: NullableID<TID>) => boolean;
    errorActions?: (id: TID, status: number, error: Error) => Action | null;
}
export interface LoaderFactoryPropsWithoutID<TState, TPayload> extends LoaderFactoryBaseProps<TState> {
    actions: GetterActionsWithoutId<TPayload>;
    apiCall: () => Observable<TPayload>;
    selector: Selector<TState, boolean>;
    errorActions?: (status: number, error: Error) => Action | null;
}
export type LoaderFactoryProps<TState, TPayload, TID> = LoaderFactoryPropsWithID<TState, TPayload, TID> | LoaderFactoryPropsWithoutID<TState, TPayload>;
