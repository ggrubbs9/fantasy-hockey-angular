import { ISODateString } from '@hockey/ngrx-helpers/lib/date';
import { Action, ActionCreator, Creator, NotAllowedCheck } from '@ngrx/store';
export interface GetterActionsBase<TKey, TPayload, TError, TStarted extends Creator<any[], object>, TSucceeded extends Creator<any[], {
    payload: TPayload;
    when: ISODateString;
}>, TFailed extends Creator<any[], {
    error: TError;
}>, TFinished extends Creator<any[], object>> {
    _key: TKey;
    started: ActionCreator<string, TStarted>;
    succeeded: ActionCreator<string, TSucceeded>;
    failed: ActionCreator<string, TFailed>;
    finished: ActionCreator<string, TFinished>;
}
export type GetterActionsWithoutId<TPayload, TError = number> = GetterActionsBase<'no-id', TPayload, TError, () => Action, (props: {
    when: ISODateString;
    payload: TPayload;
} & NotAllowedCheck<{
    when: ISODateString;
    payload: TPayload;
}>) => {
    when: ISODateString;
    payload: TPayload;
} & Action, (props: {
    error: TError;
} & NotAllowedCheck<{
    error: TError;
}>) => {
    error: TError;
} & Action, () => Action>;
export type GetterActionsWithId<TPayload, TID, TError = number> = GetterActionsBase<'with-id', TPayload, TError, (props: {
    id: TID;
} & NotAllowedCheck<{
    id: TID;
}>) => {
    id: TID;
} & Action, (props: {
    id: TID;
    when: ISODateString;
    payload: TPayload;
} & NotAllowedCheck<{
    id: TID;
    when: ISODateString;
    payload: TPayload;
}>) => {
    id: TID;
    when: ISODateString;
    payload: TPayload;
} & Action, (props: {
    id: TID;
    error: TError;
} & NotAllowedCheck<{
    id: TID;
    error: TError;
}>) => {
    id: TID;
    error: TError;
} & Action, (props: {
    id: TID;
} & NotAllowedCheck<{
    id: TID;
}>) => {
    id: TID;
} & Action>;
export type GetterActions<TPayload, TID = undefined> = GetterActionsWithoutId<TPayload> | GetterActionsWithId<TPayload, TID>;
