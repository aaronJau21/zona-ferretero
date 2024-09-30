import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HelpersModule } from 'src/helpers/helpers.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [PrismaModule, HelpersModule],
})
export class AuthModule {}
