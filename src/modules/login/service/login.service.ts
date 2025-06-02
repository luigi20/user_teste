import { Injectable } from '@nestjs/common';
import { User } from '../../user/shared/entities/user.entity';
import bcrypt from 'bcrypt';
import { IUserRepository } from '../../user/shared/repositories/abstract_class/IUserRepository';
import { AuthService } from '@modules/auth/authService';
interface IUserRequest {
  login: string;
  senha: string;
}
@Injectable()
export class LoginService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly authService: AuthService,
  ) {}
  public async execute({ login, senha }: IUserRequest): Promise<User> {
    const saltRounds = 12;
    const hash_password = await bcrypt.hash(senha, saltRounds);
    const user = new User({
      login: login,
      senha: hash_password,
      data: new Date(),
      jwe: '',
    });
    const payload = {
      sub: user.id,
      login: user.login,
    };
    const jwe = await this.authService.generateJwe(payload);
    user.jwe = jwe;
    await this.userRepository.create(user);
    return user;
  }
}
