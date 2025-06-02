import { User } from '../../entities/user.entity';

abstract class IUserRepository {
  abstract create(data: User): Promise<void>;
}

export { IUserRepository };
