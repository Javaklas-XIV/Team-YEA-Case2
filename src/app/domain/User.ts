import {UserRoles} from "../util/enum";

export interface User{
  username: string;
  password: string;
  role: UserRoles;
  token: string;
}
