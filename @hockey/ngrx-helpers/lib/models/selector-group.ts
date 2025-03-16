import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
export type SelectorGroup<T extends {
    [key: string]: any;
}, Store = unknown> = {
    [K in keyof T]: MemoizedSelector<Store, T[K]>;
};
export type SelectorGroupWithProps<T extends {
    [key: string]: unknown;
}, Props, Store = unknown> = {
    [K in keyof T]: MemoizedSelectorWithProps<Store, Props, T[K]>;
};
