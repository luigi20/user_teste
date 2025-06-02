import { PrismaService } from '@modules/prisma/service/prisma.service';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from './abstract_class/IUserRepository';
import { User } from '../entities/user.entity';
import { PrismaUserMapper } from '@modules/prisma/mappers/PrismaUserMapper';

@Injectable()
class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(data);
    await this.prisma.user.create({
      data: raw,
    });
  }
}

export { UserRepository };
