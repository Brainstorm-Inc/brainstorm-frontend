import {User} from './user.model'

export interface AuthenticatedUser extends User {
  token: string;
}
