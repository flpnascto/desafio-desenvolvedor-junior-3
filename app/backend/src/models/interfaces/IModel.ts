export interface IModelReader<T> {
  getAll(order?: string): Promise<T[] | null>;
  getById(id: string): Promise<T | null>;
  getByAuthorId?(authorId: string, order?: string): Promise<T[] | null>;
}

export interface IModelWriter<T> {
  create(arg: Omit<T, 'id'>): Promise<T>;
  update(arg: T): Promise<T>;
}
export interface IModelDelete {
  removeById(id: string): Promise<boolean>;
}

export interface IModel<T>
  extends IModelReader<T>,
    IModelWriter<T>,
    IModelDelete {}
