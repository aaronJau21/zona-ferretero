import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashService } from 'src/helpers/hash/hash.service';
import { JsonWebTokenService } from 'src/helpers/json-web-token/json-web-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashService: HashService,
    private readonly jwtService: JsonWebTokenService,
  ) {}

  async login(data: LoginAuthDto) {
    const user = await this.prismaService.users.findFirst({
      where: {
        name: data.name,
      },
    });

    if (!user) throw new NotFoundException();

    const pwd = this.hashService.comparePassword(data.password, user.password);
    if (!pwd) throw new NotFoundException();

    const jwt = await this.jwtService.createToken(user);

    return {
      user: user.name,
      token: jwt,
    };
  }
}
