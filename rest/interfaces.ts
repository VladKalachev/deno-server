export interface User {
    id: string;
    name: string;
}

export interface IContext {
    response: any,
    params?: { id: string}
}