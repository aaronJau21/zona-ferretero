import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() login: LoginAuthDto) {
    return this.authService.login(login);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  logout() {
    return 'Good Bye';
  }
}
