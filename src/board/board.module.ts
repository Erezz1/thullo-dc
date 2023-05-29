import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { Board, BoardSchema } from './schemas/board.schema';

import { UserModule } from 'src/user/user.module';
import { RolesStrategy } from './strategies/roles.strategy';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      {
        name: Board.name,
        schema: BoardSchema
      },
    ]),
    PassportModule
  ],
  controllers: [BoardController],
  providers: [
    BoardService,
    RolesStrategy
  ],
  exports: [BoardService]
})
export class BoardModule { }
