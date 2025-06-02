import { Module } from '@nestjs/common';
import { UserRepository } from '@modules/user/shared/repositories/UserRepository';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';
import { DecryptJweController } from '@modules/decrypt_jwe/controller/decryptjwe.controller';
import { DecryptJWEService } from '@modules/decrypt_jwe/service/decryptjwe.service';
import { IUserRepository } from '@modules/user/shared/repositories/abstract_class/IUserRepository';

@Module({
  imports: [],
  controllers: [LoginController, DecryptJweController],
  providers: [
    LoginService,
    DecryptJWEService,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class LoginModule {}
