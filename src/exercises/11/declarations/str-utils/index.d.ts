type fn = (value: string) => string;
declare module 'str-utils' {
    export const strReverse: fn;
    export const strToLower: fn;
    export const strToUpper: fn;
    export const strRandomize: fn;
    export const strInvertCase: fn;
}
