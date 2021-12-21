import {ReadonlyKeys} from "ts-essentials";

export type OmitReadonly<T extends object> = Omit<T, ReadonlyKeys<T>>
