import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { HelpersModule } from './helpers/helpers.module';
import { AuthModule } from './auth/auth.module';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    HelpersModule,
    AuthModule,
    // ConfigModule.forRoot(),
  ],
})
export class AppModule {}
