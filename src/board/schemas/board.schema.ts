import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from 'src/user/schemas/user.schema';
import { Roles } from '../constants/roles.enum';

export type BoardDocument = mongoose.HydratedDocument<Board>;

@Schema()
export class Board {
  @Prop({
    type: String,
    minlength: 5,
  })
  title: string;

  @Prop({
    type: String,
    maxlength: 200,
    default: '',
  })
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  coverUrl: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  isPrivate: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;

  @Prop({
    type: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      role: {
        type: String,
        enum: Roles,
        default: Roles.member,
      }
    }],
  })
  members: {
    user: User,
    role: Roles,
  }[];
}

export const BoardSchema = SchemaFactory.createForClass(Board);
