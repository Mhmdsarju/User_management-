export interface IAuthService {

  register(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<any>;

  login(
    email: string,
    password: string
  ): Promise<any>;
}