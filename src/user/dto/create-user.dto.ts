import { Type_user } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEnum(Type_user)
  type_user: Type_user;
}
