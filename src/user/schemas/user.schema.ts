import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Board } from 'src/board/schemas/board.schema';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: String,
    minlength: 5,
  })
  avatarUrl: string;

  @Prop({
    type: String,
    minlength: 10,
    maxlength: 50,
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
    required: true,
    minlength: 4,
    maxlength: 30,
  })
  username: string;

  @Prop({
    type: String,
    minlength: 6,
    maxlength: 30,
    required: true,
  })
  password: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;

  @Prop({
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board'
    }]
  })
  boards: Board[];

  // @BeforeInsert()
  // bcryptPass() {
  //   const salt = bcrypt.genSaltSync(10);
  //   const hash = bcrypt.hashSync(this.password, salt);
  //   this.password = hash;
  // }
}

export const UserSchema = SchemaFactory.createForClass(User);
