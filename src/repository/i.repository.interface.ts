export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | undefined>;
  create(t: T): Promise<T>;
  update(idOrEntity: T | string): Promise<T>;
  delete(id: string): Promise<boolean>;
  findBy(filter: Partial<T>): Promise<T[]>;
}
