import { User } from '../entities/user.entity';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      login: user.login,
      senha: user.senha,
      data: user.data,
      jwe: user.jwe,
    };
  }
}
