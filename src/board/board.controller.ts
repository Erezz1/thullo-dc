import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';

import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './constants/roles.enum';

@Controller('board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService
  ) { }

  @Post()
  create(
    @Body() createBoardDto: CreateBoardDto,
    @Req() req
  ) {
    const { user } = req;
    return this.boardService.create(createBoardDto, user);
  }

  @UseGuards(new RolesGuard())
  @Get(':boardId')
  findOne(@Param('boardId', MongoIdPipe) boardId: string) {
    return this.boardService.findOneById(boardId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
