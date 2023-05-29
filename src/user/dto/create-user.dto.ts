import { MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(10)
  @MaxLength(50)
  name: string;

  @MinLength(4)
  @MaxLength(30)
  username: string;

  @MinLength(6)
  @MaxLength(30)
  password: string;
}
