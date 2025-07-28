import { User } from "entites/User";
import { BaseRepository } from "./base.repository";
import { usersData } from "seed-data/users.seed";

export class UserRepository extends BaseRepository<User> {
  private static _instance: UserRepository | null = null;
  private constructor() {
    super(usersData);
  }
  static get instance(): UserRepository {
    return (this._instance ??= new UserRepository());
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.data.find((user) => user.email === email);
  }
}
