import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../abstract_class/IUserRepository';
import { User } from '../../entities/user.entity';

@Injectable()
export class inMemoryUserRepository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(data: User): Promise<void> {
    this.list_user.push(data);
  }
  public list_user: User[] = [];
}
