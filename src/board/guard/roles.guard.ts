import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

import { User } from 'src/user/schemas/user.schema';
import { Roles } from '../constants/roles.enum';

@Injectable()
export class RolesGuard extends AuthGuard('roles') {
  constructor(
    private readonly role: Roles = Roles.member,
    private readonly reflector?: Reflector
  ) {
    super();
  }

  canActivate(context: ExecutionContext): any {
    const user: User = context.switchToHttp().getRequest().user;
    const { boardId } = context.switchToHttp().getRequest().params;
    console.log(context.switchToHttp().getRequest());

    return super.canActivate(context);
  }
}
