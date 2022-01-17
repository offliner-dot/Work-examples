type ActionsCreatorType<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionCreators<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<ActionsCreatorType<T>>;