import { Observable } from 'rxjs';
import { LoaderFactoryProps } from '.';
export declare function createLoader<TState, TPayload, TID>(props: LoaderFactoryProps<TState, TPayload, TID>): Observable<void>;
