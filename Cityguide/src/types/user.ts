import { IRole } from "./role";


export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface IUserConnectionPayload extends IUser {
  password: string;
}

export interface IAuthenticatedUser extends IUser {
  roles: IRole[];
}

export interface IUserSelector {
  infos: IAuthenticatedUser
  isLogged: boolean
}

export interface IUserInitialState {
  user: IUserSelector
}