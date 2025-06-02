import { Global, Module } from '@nestjs/common';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from '@modules/login/login.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PrismaModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
