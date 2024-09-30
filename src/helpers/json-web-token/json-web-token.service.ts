import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';

@Injectable()
export class JsonWebTokenService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(data: users) {
    const payload = { sub: data.id, username: data.name, role: data.type_user };

    return await this.jwtService.signAsync(payload);
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_KEY_SECRET,
    });
  }
}
