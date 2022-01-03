import {User} from './user.model'

export interface AuthenticatedUser extends User {
  id: string;
  token: string;
}
