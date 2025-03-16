import { SelectorGroup } from '../../../models/selector-group';
import { ISODateString } from '../../../date';
export interface GetterProperties<TError = number> {
    error: TError | null;
    hasError: boolean;
    hasSucceeded: boolean;
    isLoading: boolean;
    lastSuccess: ISODateString | null;
    shouldLoad: boolean;
}
export type GetterPropertySelectors<TError = number> = SelectorGroup<GetterProperties<TError>>;
