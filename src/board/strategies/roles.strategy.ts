import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Request } from 'express';
import mongoose from 'mongoose';

import { BoardService } from '../board.service';

@Injectable()
export class RolesStrategy extends PassportStrategy(Strategy, 'roles') {
  constructor(private readonly boardService: BoardService) {
    super();
  }

  async validate(req: Request) {
    const { boardId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(boardId)) {
      throw new BadRequestException('Board id is not valid');
    }
    const board = await this.boardService.findOneById(boardId);
    return board;
  }
}
