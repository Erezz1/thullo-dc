import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async register(registerDto: RegisterDto) {
    await this.userService.create(registerDto);
  }

  async generateToken(user: any) {
    const payload = { username: user.username };
    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOneByUsername(username);
    const validatePassword = await bcrypt.compare(pass, user.password);

    if (!validatePassword) {
      throw new UnauthorizedException();
    }

    return {
      avatarUrl: user.avatarUrl,
      boards: user.boards,
      name: user.name,
      username: user.username,
    };
  }
}
