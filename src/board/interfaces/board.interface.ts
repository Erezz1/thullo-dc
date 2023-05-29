import mongoose from 'mongoose';

import { Roles } from '../constants/roles.enum';

export interface ResponseBoard {
  title: string;
  coverUrl: string;
  isPrivate: boolean;
  id: mongoose.Schema.Types.ObjectId;
  members: Member[]
}

export interface Member {
  role: Roles;
  name: string;
  avatarUrl: string;
  username: string;
}
