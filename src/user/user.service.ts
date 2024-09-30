import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { users } from '@prisma/client';
import { HashService } from 'src/helpers/hash/hash.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashPassowrd: HashService,
  ) {}

  async create(data: CreateUserDto): Promise<users> {
    const { password, ...userCreate } = data;

    const hashp = this.hash(password);

    const user = await this.prismaService.users.create({
      data: {
        password: hashp,
        ...userCreate,
      },
    });

    return user;
  }

  async findAll(): Promise<users[]> {
    const users = await this.prismaService.users.findMany();
    return users;
  }

  async findOne(id: number): Promise<users> {
    const user = await this.prismaService.users.findFirst({
      where: { id },
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async update(id: number, data: UpdateUserDto): Promise<users> {
    await this.findOne(id);

    const { password, ...userUpdate } = data;

    const hashP = this.hash(password);
    const user = await this.prismaService.users.update({
      data: {
        password: hashP,
        ...userUpdate,
      },
      where: {
        id,
      },
    });

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private hash(password: string) {
    return this.hashPassowrd.hashPassword(password);
  }
}
