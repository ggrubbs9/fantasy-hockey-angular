import { ISODateString } from '../../date';
export declare enum GetterState {
    Invalid = "invalid",
    Error = "error",
    Loading = "loading",
    Valid = "valid"
}
export interface GetterLoadingState<TError = number> {
    error?: TError;
    lastSuccess?: ISODateString;
    state: GetterState;
}
export declare const INITIAL_GETTER_LOADING_STATE: Readonly<GetterLoadingState<any>>;
