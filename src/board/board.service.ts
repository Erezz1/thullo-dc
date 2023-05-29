import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board, BoardDocument } from './schemas/board.schema';
import { Roles } from './constants/roles.enum';
import { ResponseBoard } from './interfaces/board.interface';

import { User, UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(Board.name)
    private readonly boardModel: Model<BoardDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectConnection()
    private readonly connection: mongoose.Connection,
  ) { }

  async create(createBoardDto: CreateBoardDto, user: any) {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const boardCreated = new this.boardModel({
        ...createBoardDto,
        members: [{
          user,
          role: Roles.owner
        }]
      });
      const sessionBoard = await boardCreated.save();
      sessionBoard.$session(session);

      const sessionUser = await this.userModel.findOne({ username: user.username });
      await sessionUser.updateOne({
        $push: {
          boards: boardCreated
        }
      });
      sessionUser.$session(session);
      await session.commitTransaction();

    } catch (error) {
      await session.abortTransaction();
      this.catchErrors(error);

    } finally {
      session.endSession();
    }
  }

  findAll() {
    return `This action returns all board`;
  }

  async findOneById(id: string): Promise<ResponseBoard> {
    const boardFound = await this.boardModel
      .findById(id)
      .populate({
        path: 'members',
        populate: { path: 'user' }
      })
      .catch(this.catchErrors);

    if (!boardFound || !boardFound.isActive) {
      throw new NotFoundException();
    }

    const board: ResponseBoard = {
      coverUrl: boardFound.coverUrl,
      isPrivate: boardFound.isPrivate,
      id: boardFound.id,
      title: boardFound.title,
      members: boardFound.members.map(user => ({
        name: user.user.name,
        avatarUrl: user.user.avatarUrl,
        role: user.role,
        username: user.user.username,
      }))
    };
    return board;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }

  private catchErrors(error: any) {
    console.log(error);
    throw new InternalServerErrorException();
  }
}
