import { Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Query, Request } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getMany(@Query() query) {
    return this.userService.findManyUsers(query.name, query.username, query.offset);
  }

  @Delete(':username')
  @HttpCode(204)
  delete(
    @Param('username') username: string,
    @Request() req
  ) {
    return this.userService.deleteOne(username, req.user);
  }
}
