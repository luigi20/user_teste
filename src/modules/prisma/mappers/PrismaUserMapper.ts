import { UserRelations as RawUser } from '@prisma/client';
import { User } from '@modules/user/shared/entities/user.entity';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      login: user.login,
      senha: user.senha,
      data: user.data,
      jwe: user.jwe,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        login: raw.login,
        senha: raw.senha,
        data: raw.data,
        jwe: raw.jwe,
      },
      raw.id,
    );
  }
}
