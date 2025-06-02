import { Module } from '@nestjs/common';
import { UserRepository } from '@modules/user/shared/repositories/UserRepository';
import { LoginService } from './service/login.service';
import { IUserRepository } from '@modules/user/shared/repositories/abstract_class/IUserRepository';
import { DecryptJWEService } from '@modules/decrypt_jwe/service/decryptjwe.service';
import { DecryptJweController } from '@modules/decrypt_jwe/controller/decryptjwe.controller';
import { LoginController } from './controller/login.controller';
import { AuthService } from '@modules/auth/authService';

@Module({
  imports: [],
  controllers: [LoginController, DecryptJweController],
  providers: [
    LoginService,
    DecryptJWEService,
    AuthService,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class LoginModule {}
