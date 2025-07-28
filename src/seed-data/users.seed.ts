import { User } from "entites/User";
import { RoleEnum } from "enums/roles.enum";

export const usersData: User[] = [
  {
    id: "u1",
    name: "isaac",
    email: "isaac@email.com",
    role: RoleEnum.Student,
    age: 23,
    phone: "0597121549",
  },
  {
    id: "u2",
    name: "abood",
    email: "abood@email.com",
    role: RoleEnum.Student,
    age: 22,
    phone: "0597121554",
  },
  {
    id: "u3",
    name: "mohsen",
    email: "mohsen@email.com",
    role: RoleEnum.Instructor,
    age: 30,
    phone: "0597121249",
  },
];
