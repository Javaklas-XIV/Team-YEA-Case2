import {UserRoles} from "../util/enum";

export interface User{
  ID: number;
  username: string;
  password: string;
  role: UserRoles;
  token: string;
  ingevuldeLijsten: string;
}
