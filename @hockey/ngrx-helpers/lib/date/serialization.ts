export type ISODateString = string;
export declare const dateFromJSON: {
    (date: string): Date;
    (date: '' | null | undefined): null;
};
export declare function jsonDateNow(): ISODateString;
