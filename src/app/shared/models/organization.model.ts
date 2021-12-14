export interface Organization {
  id: string;
  name: string;
  users: Array<string>;
  projects: Array<string>;
  logo: string | null;
}
