import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HelpersModule } from 'src/helpers/helpers.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, HelpersModule],
})
export class UserModule {}
