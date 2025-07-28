import { IRepository } from "./i.repository.interface";

export abstract class BaseRepository<T extends { id: string }>
  implements IRepository<T>
{
  protected data: T[];

  constructor(data: T[]) {
    this.data = data;
  }

  async getAll(): Promise<T[]> {
    return await this.data;
  }

  async getOne(id: string): Promise<T | undefined> {
    return await this.data.find((i) => (i.id = id));
  }

  async create(t: T): Promise<T> {
    await this.data.push(t);
    return t;
  }

  async update(t: T): Promise<T> {
    let index = this.data.findIndex((item) => {
      item.id === t.id;
    });
    this.data[index] = t;
    return t;
  }

  async delete(id: string): Promise<boolean> {
    let length = this.data.length;
    this.data = this.data.filter((item) => item.id !== id);
    return length > this.data.length;
  }

  async findBy(filter: Partial<T>): Promise<T[]> {
    return this.data.filter((item) =>
      Object.keys(filter).every((key) => {
        return (filter as any)[key] === (item as any)[key];
      })
    );
  }

  // async findBy(filter: Partial<T>): Promise<T[]> {
  //   return this.data.filter((item) =>
  //     Object.entries(filter).every(([key, value]) => {
  //       return (item as any)[key] === value;
  //     })
  //   );
  // }
}
