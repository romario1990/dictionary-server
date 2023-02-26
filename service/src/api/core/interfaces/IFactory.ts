export type DatabaseConnection = any;
export type IFactory<T> = (connection: DatabaseConnection) => T;
