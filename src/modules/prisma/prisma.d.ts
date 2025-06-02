import { PrismaClient as OriginalPrismaClient } from '@prisma/client';
declare module '@prisma/client' {
  export { OriginalPrismaClient as PrismaClient };
  export interface UserRelations {
    id: string;
    login: string;
    senha: string;
    data: Date;
    jwe: string;
  }
}
