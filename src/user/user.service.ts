import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { getAvatar } from './utils';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = new this.userModel({
      ...createUserDto,
      avatarUrl: getAvatar(),
    });
    await userCreated.save().catch(this.catchErrors);
    return userCreated;
  }

  async findOneByUsername(username: string): Promise<User> {
    const userFound = await this.userModel
      .findOne({ username })
      .populate('boards')
      .catch(this.catchErrors);

    if (!userFound || !userFound.isActive)
      throw new NotFoundException();
    return userFound;
  }

  async findManyUsers(name?: string, username?: string, offset: number = 0) {
    let results: User[] = []
    if (name) {
      results = await this.userModel
        .find({
          name: { $regex: '.*' + name + '.*' },
          isActive: true,
        })
        .limit(10)
        .skip(offset)
        .catch(this.catchErrors) || [];
    } else if (username) {
      results = await this.userModel
        .find({
          username,
          isActive: true,
        })
        .catch(this.catchErrors) || [];
    } else {
      results = [];
    }

    const usersFound = results.map(user => ({
      username: user.username,
      name: user.name,
      avatarUrl: user.avatarUrl,
    }));
    return usersFound;
  }

  async deleteOne(username: string, user: any) {
    const userFound = await this.userModel.findOne({ username })
      .catch(this.catchErrors);

    if (!userFound) {
      throw new NotFoundException();
    }
    if (username !== user.username) {
      throw new UnauthorizedException();
    }
    await this.userModel.findOneAndUpdate(
      { username },
      { isActive: false }
    ).catch(this.catchErrors);
  }

  private catchErrors(error: any) {
    if (error?.code === 11000) {
      throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
    }

    console.log(error);
    throw new InternalServerErrorException();
  }
}
