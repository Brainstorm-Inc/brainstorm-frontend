export interface User {
  readonly id?: string;
  firstName: string;
  lastName: string;
  readonly email: string;
  profilePic?: string;
}
