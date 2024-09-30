import { Module } from '@nestjs/common';
import { HashService } from './hash/hash.service';
import { JsonWebTokenService } from './json-web-token/json-web-token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [HashService, JsonWebTokenService],
  exports: [HashService, JsonWebTokenService],
})
export class HelpersModule {}
