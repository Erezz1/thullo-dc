import { Body, Controller, Get, Post, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Public } from './decorators';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    const { token } = await this.authService.generateToken(user);
    return {
      user,
      token
    }
  }

  @Get('refresh-token')
  async refreshToken(@Request() req) {
    const user = req.user;
    return this.authService.generateToken(user);
  }
}
