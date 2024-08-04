type Comparator<T> = (a: T, b: T) => number;

type R<U> = <T>(input: T[], comparator: Comparator<T>) => U;
type RNull = <T>(input: T[], comparator: Comparator<T>) => T | null;

declare module 'stats' {
    export const getMaxIndex: R<number>;
    export const getMinIndex: R<number>;
    export const getMedianIndex: R<number>;

    export const getMaxElement: RNull;
    export const getMedianElement: RNull;
    export const getMinElement: RNull;

    export const getAverageValue: RNull;
}
