import {UserModel} from './user.model'

export interface AuthenticatedUser extends UserModel {
  token: string;
}
