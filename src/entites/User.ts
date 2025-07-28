import { RoleEnum } from "enums/roles.enum";

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
  age?: number;
  phone?: string;
}
